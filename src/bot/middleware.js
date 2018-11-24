import {commands} from './commands'
import {payloads} from './payloads'
import {sendTextMessage} from './lib/messages'

export async function botMessengerMiddleware(event) {
  let webhookEvent = event
  
  if(webhookEvent.message) {
    if(webhookEvent.message.text) {
      // Text
      commands(webhookEvent)
    }else {
      // Attachments
      sendTextMessage(webhookEvent.sender.id, 'O tomhle nic moc nevím...')
    }
  }else {
    // Payload
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}

// Likes
// 369239383222810 369239263222822 369239343222814