import request from 'request-promise'
import async from 'async'
import cheerio from 'cheerio'
import cheerioTableparser from 'cheerio-tableparser'
import {sendTextMessage} from '../lib/messages'

export function initializeIdosTable(from, to, timeTravel, dateTravel){
    let url = `https://jizdnirady.idnes.cz/praha/spojeni/?f=${from}&t=${to}&time=${timeTravel}&date=${dateTravel}&submit=true`
    let result = []
  
    return new Promise( (resolve, reject) => {
      request(url).then((html) => {
        const parseHtml = cheerio.load(html, { decodeEntities: false, normalizeWhitespace: true })
        cheerioTableparser(parseHtml)
  
        // Parse data from Idos
        const data = parseHtml('table tbody').attr('class', 'results').first().parsetable(true, true, true);
        // 6 columns in 1 row
        for ( var j = 0; j < data[2].length; j++ ){
          const parseTable = []
  
          for( var i = 2; i < data.length ; i++ ){
            parseTable.push(data[i][j])
          }
  
          result.push(parseTable)
        }
        resolve(result)
        console.log(result)
      }).catch((err) => reject(err))
    })
  }

  //initializeIdosTable('husinecka', 'volha', '10:30', '22.11.2018')

 export function sendIdosAnswer(sender, text, timeTravel, dateTravel) {
   const stops = transformTextForIdos(text)
   
   let from = encodeUrlParameter(stops[0])
   let to = encodeUrlParameter(stops[1])
   
   const initializePromise = initializeIdosTable(from, to, timeTravel, dateTravel)
    initializePromise.then( (result) => {
        // Initialized table data
        const data = result
  
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
  
          //setTimeout(()=>{sendTextMessage(sender, extraInformation)}, 500)
          //setTimeout(()=>{sendGenMessage(sender, mTemplate.templates['get_test'])}, 700)
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
              //console.log(message)
  
            } else {
              let message2 = zastavka + ' ' + prijezd + ' ' + odjezd + spoj 
              sendTextMessage(sender, message2)
              //console.log(message2)
            }
  
  
            i++
  
            callback()
          }, 800)
        })
      }, (err) => {
        sendTextMessage(sender, "Něco se pokazilo zkus to znovu :-(")
    })
  }
  
  function isEven(value) {
      if (value%2 == 0)
          return true;
      else
          return false;
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