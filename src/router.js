import {Router} from 'express'
import path from 'path'
import requireDir from 'require-dir'

const controller = requireDir('./controllers')

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
const wrap = fn => (...args) => fn(...args).catch(args[2])

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/facebook-webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "TriPrsaNaHrudi89"

    console.log('neco:', req.body)
      
    // Parse the query params
    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED')
        res.status(200).send(challenge)
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);    
      }
    }
  })

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/facebook-webhook', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

export default router
