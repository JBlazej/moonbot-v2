import {sendTextMessage} from './messages'

export function botMessageMiddleware(event) {
  let webhookEvent = event

  console.log(webhookEvent)
  
  if(webhookEvent.message) {
    console.log(webhookEvent.sender.id)
    console.log(webhookEvent.message)
    console.log(webhookEvent.message.text)

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")

    console.log(formattedMessage)
    sendTextMessage(webhookEvent.sender.id, 'Kravina')
  }else {
    console.log(webhookEvent.postback)
  }
}