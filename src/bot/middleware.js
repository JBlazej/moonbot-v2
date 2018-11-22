import {sendTextMessage} from './messages'

export function botMessageMiddleware(event) {
  let webhookEvent = event

  console.log(webhookEvent)
  console.log(webhookEvent.sender.id)
  console.log(webhookEvent.message)
  console.log(webhookEvent.message.text)
  console.log(webhookEvent.postback)

  let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
  let formattedMessage = incomeMessage.toString().split(" ")

  console.log(formattedMessage)

  if(formattedMessage[0] === 'ahoj') {
    sendTextMessage(webhookEvent.sender.id, 'Kravina')
  }else {
    sendTextMessage(webhookEvent.sender.id, 'Druha kravina') 
  }
}