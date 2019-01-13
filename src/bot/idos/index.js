import request from 'request-promise'
import async from 'async'
import tabletojson from 'tabletojson'

import { sendTextMessage, sendGenMessage, sendMultipleMessages } from '../lib/messages'
import { getTime, getDate, shiftTimeAndDateUTC } from '../lib/dateAndTime'
import { templates } from '../lib/templates'
import { loadingIDOS } from '../lib/answers'

import { modifyUserById, getUserById } from '../../services/user'

function getDataFromIdos(from, to, timeTravel, dateTravel){
  let url = `https://jizdnirady.idnes.cz/praha/spojeni/?f=${from}&t=${to}&time=${timeTravel}&date=${dateTravel}&submit=true`

  return new Promise( (resolve, reject) => {
        tabletojson.convertUrl(
          url,
          function(tablesAsJson) {
              resolve(tablesAsJson[1])
          }
      ).catch((err) => reject(err))
  })
}

export function sendIdosAnswer(sender, text, utcTimeAndDate) {
  const stops = transformTextForIdos(text)

  let from = encodeUrlParameter(stops[0])
  let to = encodeUrlParameter(stops[1])
   
  let timeTravel = getTime(utcTimeAndDate)
  let dateTravel = getDate(utcTimeAndDate)
   
  sendMultipleMessages(sender, loadingIDOS)

  const initializePromise = getDataFromIdos(from, to, timeTravel, dateTravel);
  initializePromise.then((result) => {
    const data = result;
    let i = 0
    
    async.eachSeries(data, (idosData, callback) => {
      if (i === data.length - 1) {
        // Break out of async
        var err = new Error('Broke out of async')
        const pom = data.length
        const splitInformation = []
        splitInformation.push(data[pom-1])

        let extraInformation = splitInformation[0]['Odkud/Přestup/Kam'].split(",",3).toString()
        extraInformation += " Kč"

        err.break = true

        setTimeout(()=>{sendTextMessage(sender, extraInformation)}, 500)
        setTimeout(()=>{sendGenMessage(sender, templates['get_test'])}, 700)
        setTimeout(()=>{modifyUserById(sender, stops[0], stops[1], utcTimeAndDate)}, 900)

        return callback(err)
        }

      setTimeout(() => {
        let zastavka = idosData['Odkud/Přestup/Kam']
        let prijezd = idosData['Příj.']
        let odjezd  = idosData['Odj.']
        let spoj = idosData['6']

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