import {botMessageMiddleware} from '../bot/middleware'

export async function  facebookVerificationHook(req, res) {
   // Your verify token. Should be a random string.
   let VERIFY_TOKEN = "TriPrsaNaHrudi89"
     
   // Parse the query params
   let mode = req.query['hub.mode']
   let token = req.query['hub.verify_token']
   let challenge = req.query['hub.challenge']
     
   // Checks if a token and mode is in the query string of the request
   if (mode && token) {
     if (mode === 'subscribe' && token === VERIFY_TOKEN) {
         
       res.status(200).send(challenge)
     } else {
       res.sendStatus(403);    
     }
   }
}

export async function facebookEventHook(req, res){
    let body = req.body

    /*if (!req.body || !req.body.entry[0] || !req.body.entry[0].messaging[0].message) {
        return console.log('No request received')
    }*/
    if (body.object === 'page') {
        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {
            entry.messaging.forEach(function (event) {
                console.log(event)
                botMessageMiddleware(event)   
            })
            res.status(200).send('EVENT_RECEIVED')
        })
    } else {
        res.sendStatus(404)
    }
}
