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

import { createOffice } from './services/office'
createOffice('1', 'bla', 'Pondělí', '8:00-11:00, 13:00-15:00')
createOffice('2', 'bla', 'Úterý', '8:00-11:00')
createOffice('3', 'bla', 'Středa', '13:00-15:00')
createOffice('4', 'bla', 'Čtvrtek', '8:00-11:00')
createOffice('5', 'bla', 'Pátek', '8:00-11:00')
//sendHeadAndRep('1')
//createDormitory('1', 'Blanice', 'Miroslava Tichá', 'tichami@vse.cz', '+420 224 092 511', 'Petra Kowalská', 'petra.kowalska@vse.cz', '+420 224 092 513', 'https://www.google.com/maps/place/Kolej+Blanice/@50.0198007,14.4956339,17z/data=!3m1!4b1!4m5!3m4!1s0x470b9229c94d6f2b:0x3427c9d8147fef0f!8m2!3d50.0197973!4d14.4978227')
export default app