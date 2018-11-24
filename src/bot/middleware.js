import {commands} from './commands'
import {payloads} from './payloads'

export async function botMessengerMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message.text) {
    // Text
    commands(webhookEvent)
  }else if(webhookEvent.message.attachments) {
    // Attachments
    console.log('Prisel')
  }else {
    // Payload
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}