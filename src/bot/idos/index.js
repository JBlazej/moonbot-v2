import request from 'request-promise'
import async from 'async'
import cheerio from 'cheerio'
import cheerioTableparser from 'cheerio-tableparser'

import { sendTextMessage, sendGenMessage, sendMultipleMessages } from '../lib/messages'
import { getTime, getDate, shiftTimeAndDateUTC } from '../lib/dateAndTime'
import { templates } from '../lib/templates'
import { loadingIDOS } from '../lib/answers'

import { modifyUserById, getUserById } from '../../services/user'

export function initializeIdosTable (from, to, timeTravel, dateTravel) {
    let url = `https://jizdnirady.idnes.cz/praha/spojeni/?f=${from}&t=${to}&time=${timeTravel}&date=${dateTravel}&submit=true`
    let result = []
  
    return new Promise( (resolve, reject) => {
      request(url).then((html) => {
        const parseHtml = cheerio.load(html, { decodeEntities: false, normalizeWhitespace: true })
        cheerioTableparser(parseHtml)
  
        // Parse data from Idos
        const data = parseHtml('table tbody').attr('class', 'results').first().parsetable(true, true, true)
        // 6 columns in 1 row

        for ( var j = 0; j < data[2].length; j++ ){
          const parseTable = []
  
          for( var i = 2; i < data.length ; i++ ){
            parseTable.push(data[i][j])
          }
  
          result.push(parseTable)
        }

        resolve(result)
      }).catch((err) => reject(err))
    })
  }

 export function sendIdosAnswer(sender, text, utcTimeAndDate) {
   const stops = transformTextForIdos(text)

   let from = encodeUrlParameter(stops[0])
   let to = encodeUrlParameter(stops[1])
   
   let timeTravel = getTime(utcTimeAndDate)
   let dateTravel = getDate(utcTimeAndDate)

   console.log(timeTravel)
   console.log(dateTravel)

   console.log(from)
   console.log(to)


   
   sendMultipleMessages(sender, loadingIDOS)
   
   const initializePromise = initializeIdosTable(from, to, timeTravel, dateTravel)
    initializePromise.then( (result) => {
        // Initialized table data
        const data = result
        console.log(data)
        let i = 0
  
        async.eachSeries(data, function(idosData, callback) {
  
          if (i === data.length - 1) {
          // Break out of async
          var err = new Error('Broke out of async')
          const pom = data.length
          const splitInformation = []
          splitInformation.push(data[pom-1])
  
          let extraInformation = splitInformation[0][0].split(",",3).toString()
          extraInformation += " Kč"
  
          err.break = true
  
          
          setTimeout(()=>{sendTextMessage(sender, extraInformation)}, 500)
          setTimeout(()=>{sendGenMessage(sender, templates['get_test'])}, 700)
          setTimeout(()=>{modifyUserById(sender, stops[0], stops[1], utcTimeAndDate)}, 900)

          return callback(err)
          }
  
          setTimeout(() => {
            let zastavka = idosData[0]
            let prijezd = idosData[1]
            let odjezd  = idosData[2]
            let spoj = idosData[5]
  
  
            if (odjezd.length === 0 || odjezd.length === 1){ odjezd = 'příjezd'; }
            if (prijezd.length === 0 || prijezd.length === 1){ prijezd = 'odjezd'; }
            if (spoj.length === 3){
  
               spoj = ', autobusem č. ' + spoj
  
  
             }
  
             if (spoj === 'A' || spoj === 'B' || spoj === 'C'){
               spoj = ', metro ' + spoj
  
             }
  
             if(spoj.length === 2 || spoj.length === 1){
               spoj = ', tramvají č. ' + spoj
  
  
             }
  
             if(spoj.charAt(0) === 'P'){
               spoj = ', ' + spoj.toLowerCase()
             }
  
            let val = isEven(i);
  
            if (val === false){
              let message = zastavka + ' ' + odjezd + ' ' + prijezd + spoj 
              sendTextMessage(sender, message)
  
            } else {
              let message2 = zastavka + ' ' + prijezd + ' ' + odjezd + spoj 
              sendTextMessage(sender, message2)
  
            }

            i++

            callback()
          }, 800)
        })
      }, (err) => {
        const text = ['Něco se pokazilo. :-(','Příkaz je ve tvaru: Spoj odkud do kam']
        sendMultipleMessages(sender, text)
    })
  }
  
function isEven(value) {
  if (value%2 == 0){
    return true
  }else {
    return false
  }
}

function transformTextForIdos(text){
  const onlyConnections = text.replace("spoj ", "")
  const stops = onlyConnections.split(" do ")

  return stops
}

function encodeUrlParameter(value) {
	return encodeURIComponent(value)
  	.replace(/\%20/g, '+')
}

export async function sendNextIdos(id){
  const pole = await getUserById(id)


  if(pole){
    let text = 'spoj ' + pole[0].station.from + ' do ' + pole[0].station.to
    
    let utcTimeAndDate = pole[0].station.time

    let shiftedTimeAndDateUTC = shiftTimeAndDateUTC(utcTimeAndDate)

    return sendIdosAnswer(id, text, shiftedTimeAndDateUTC)
  }else {
    sendTextMessage(id, "Něco se pokazilo zkus to znovu :-(")
  }
}
