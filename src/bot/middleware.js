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
      sendTextMessage(webhookEvent.sender.id, 'O tomhle nic moc nevím...')
    }
  }else {
    // Payload
    payloads(webhookEvent.sender.id, webhookEvent.postback.payload)
  }
}

//webhookEvent.message.attachments