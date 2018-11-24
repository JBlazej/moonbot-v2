import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import serveFavicon from 'serve-favicon'
import sslRedirect from 'heroku-ssl-redirect'
import cookieParser from 'cookie-parser'
import path from 'path'
import router from './router'
import {connectDB} from './models'
import {sigterm} from './services/sigterm'

/**
 * Start Express server.
 */
const app = express()
/**
 * Setup Express server.
 */
// DB
connectDB()
// HEROKU SIGTERM
sigterm()
// SSL
app.use(sslRedirect())
// PUBLIC
app.use('/public', express.static(__dirname + '../public'))
// BODY
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// COOKIE
app.use(cookieParser())
// FAV
app.use(serveFavicon(path.join(__dirname, '../public', 'favicon.ico')))
// ROUTER
app.use(router)
// PORT
app.set('port', (process.env.PORT || 3030))

/**
 * Run Express server.
 */
app.listen(app.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    )
    console.log("  Press CMD-C to stop\n");
})

// HANDLINGS ERRORS
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

export default app