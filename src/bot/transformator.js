import {sendTextMessage} from './messages'

export function transformTextMessage(sender, text){
    const incomeMessage = text.toLowerCase().trim()
    const formattedMessage = incomeMessage.toString().split(" ")

    if(formattedMessage[0] === 'ahoj'){
        sendTextMessage(sender, 'Kravina')
      }else {
        sendTextMessage(sender, 'Druha kravina') 
      }
}