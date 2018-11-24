import {commands} from './commands'
import {payloads} from './payloads'

export async function botMessengerMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message) {
    // Text
    commands(webhookEvent)
  }else {
    // Payload
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}

//webhookEvent.message.attachments