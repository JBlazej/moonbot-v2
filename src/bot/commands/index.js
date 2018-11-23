import {sendTextMessage, sendIntroduction} from '../lib/messages'
//import {templates} from '../../views/templates'
import {sendIdosAnswer} from '../idos'
import {intro} from '../../views/messages'

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")


    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moon':
        const text = intro
        sendIntroduction(webhookEvent.sender.id, text[0], text[1], text[3])
        break
  
        case 'napoveda':
        case 'nápověda':
        //sendGenMessage(webhookEvent.sender.id, templates['send_quick'])
        break
  
        case 'spojeni':
        case 'spojení':
        //sendGenMessage(webhookEvent.sender.id, templates['get_idos'])
        break

        case 'spoj':
        sendIdosAnswer('1986144768118336',webhookEvent.message.text, '20:30', '22.11.2018')
        break
  
        case 'vse':
        case 'vše':
        //sendGenMessage(webhookEvent.sender.id, templates['get_school'])
        break
  
        case 'prvak':
        case 'prvák':
        //sendGenMessage(webhookEvent.sender.id, templates['send_manual'])
        break
  
        case 'fakulty':
        case 'fakulta':
        //sendGenMessage(webhookEvent.sender.id, templates['get_faculties'])
        break
  
        case 'koleje':
        case 'kolej':
        //sendGenMessage(webhookEvent.sender.id, templates['get_dormitories'])
        break
  
        case 'insis':
        case 'isis':
        //sendGenMessage(webhookEvent.sender.id, templates['get_isis'])
        break
  
        case 'hackernews':
        //sendGenMessage(webhookEvent.sender.id, templates['get_hackernews'])
        break
  
        case 'jb':
        //sendGenMessage(webhookEvent.sender.id, templates['get_jb'])
        break
    }
}