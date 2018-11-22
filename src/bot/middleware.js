import {commands} from './commands/commands'
import {payloads} from './payloads/payloads'

export async function botMessageMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message) {
    // Text message interaface
    return commands(webhookEvent)
  }else {
    // Payload interface
    return payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}