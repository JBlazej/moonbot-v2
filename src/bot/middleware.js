import {commands} from './commands'
import {payloads} from './payloads'

export async function botMessengerMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message) {
    if(webhookEvent.message.text) {
      // Text
      commands(webhookEvent)
    }else {
      console.log('Nejke hovno')
    }
  }else {
    // Payload
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}

//webhookEvent.message.attachments