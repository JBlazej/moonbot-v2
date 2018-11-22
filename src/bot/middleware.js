import {commands} from './commands/commands'

export async function botMessageMiddleware(event) {
  let webhookEvent = event

  //console.log(webhookEvent)
  
  if(webhookEvent.message) {
    //console.log(webhookEvent.sender.id)
    //console.log(webhookEvent.message)
    //console.log(webhookEvent.message.text)

    //let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    //let formattedMessage = incomeMessage.toString().split(" ")
    commands(webhookEvent)
    //console.log(formattedMessage)
    
  }else {
    console.log(webhookEvent.postback)
    //console.log(webhookEvent.postback.payload)
  }
}