import {commands} from './commands/commands'
import {payloads} from './payloads/payloads'

export async function botMessageMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message) {
    commands(webhookEvent)
  }else {
    console.log(webhookEvent.postback)
    console.log(webhookEvent.postback.payload)
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}