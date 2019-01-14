import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import serveFavicon from 'serve-favicon'
import sslRedirect from 'heroku-ssl-redirect'
import cookieParser from 'cookie-parser'
import path from 'path'
import router from './router'
import {connectDB} from './models'
import {sigtermBE, sigtermFE} from './services/sigterm'

/**
 * Start Express server
 * 
 * Moonbot
 * version 2
 * 
 * Jan Blažej
 * Vysoká škola ekonomická v Praze
 * V roce 2018
 * 
 * Bachelor thesis
 * 
 */
const app = express()

/**
 * Setup Express server
 * 
 */
app.use(sslRedirect())
app.use('/public', express.static(__dirname + '../public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(serveFavicon(path.join(__dirname, '../public', 'favicon.ico')))
app.use(router)

app.set('port', (process.env.PORT || 3030))

/**
 * Run Express server
 * 
 */
app.listen(app.get("port"), () => {
    console.log(
      "App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    )
    console.log("Press CMD-C to stop\n");
})

/**
 * Database connection
 * 
 */
connectDB()

/**
 * CRON services
 * 
 */
sigtermBE()
sigtermFE()

/**
 * HANDLINGS ERRORS
 * 
 */
let shuttingDown = false

app.use((req, res, next) => {
    if (!shuttingDown) return next()
  
    res.setHeader('Connection', 'close')
    const err = new Error('Server is in the process of restarting')
    err.status = 503
    next(err)
})

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
  
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    console.log(err)
    res.send({'error': err.message})
    if (app.get('env') === 'development') {
        console.log(err)
    }
})

//import { createOffice } from './services/office'
//createOffice('1', 'bla', 'Pondělí', '8:00-11:00, 13:00-15:00')
//createOffice('2', 'bla', 'Úterý', '8:00-11:00')
//createOffice('3', 'bla', 'Středa', '13:00-15:00')
//createOffice('4', 'bla', 'Čtvrtek', '8:00-11:00')
//createOffice('5', 'bla', 'Pátek', '8:00-11:00')
//createOffice('6', 'bla', 'Sobota', 'Zavřeno')
//createOffice('0', 'bla', 'Nedelě', 'Zavřeno')

//sendHeadAndRep('1')
import { createDormitory } from './services/dormitory'
createDormitory('2', 'Vltava', 'Dagmar Šolarová', 'dagmar.solarova@vse.cz', '+420 224 092 511', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/Kolej+Vltava/@50.0198809,14.4933567,17z/data=!3m1!4b1!4m5!3m4!1s0x470b922a1eea29e1:0x4403a577efccf6d5!8m2!3d50.0198809!4d14.4955454')
createDormitory('3', 'Jarov I.', 'Petra Angerová', 'petra.angerova@vse.cz', '+420 224 092 197', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/kolej+Jarov+I/@50.0919837,14.4816273,17z/data=!3m1!4b1!4m5!3m4!1s0x470b9345d7594aa7:0x5054f325ab985a43!8m2!3d50.0919837!4d14.483816')
createDormitory('4', 'Jarov I.E', 'Ing. Zuzana Chudobová', 'zuzana.chudobova@vse.cz', '+420 224 092 108', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/search/kolej+jarov+I.E/@50.0920282,14.4815833,17z/data=!3m1!4b1')
createDormitory('5', 'Jarov II.', 'Zuzana Fofoňková', 'zuzana.fofonkova@vse.cz', '+420 224 092 010', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/kolej+Jarov+II./@50.0906535,14.4919244,17z/data=!3m1!4b1!4m5!3m4!1s0x470b93384df452eb:0x9ac2a927e12384d8!8m2!3d50.0906535!4d14.4941131')
createDormitory('6', 'Jarov III.F', 'Novotná Hana', 'hana.novotna@vse.cz	', '+420 224 092 313', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/Koleje+Jarov+III.+F/@50.0915304,14.4838884,17z/data=!3m1!4b1!4m5!3m4!1s0x470b93465c66b63f:0x89eb9abafd8070e9!8m2!3d50.0915304!4d14.4860771')
createDormitory('7', 'Jarov III.G', 'Kateřina Vykuková', 'vykukovk@vse.cz', '+420 224 092 315', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/Vysok%C3%A1+%C5%A1kola+ekonomick%C3%A1+v+Praze+-+Kolej+Jarov+III.+G/@50.0914537,14.4810951,17z/data=!3m1!4b1!4m5!3m4!1s0x470b9345cef6982b:0x832087338635827a!8m2!3d50.0914537!4d14.4832838')
createDormitory('8', 'Rooseveltova kolej', 'Hanáková Eva', 'hanakove@vse.cz', '+420 224 098 199', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 098 695', 'https://www.google.com/maps/place/Rooseveltova+kolej/@50.1045145,14.4325107,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94c971e317c1:0xf30b5a234d8b5045!8m2!3d50.1045145!4d14.4346994')





export default app
