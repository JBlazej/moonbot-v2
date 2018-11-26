import {sendTextMessage, sendMultipleMessages, sendGenMessage} from '../lib/messages'
import {getTimeAndDateNow} from '../lib/dateAndTime'
import {sendIdosAnswer} from '../idos'

import {info, introIDOS, help} from '../lib/answers'
import {templates} from '../lib/templates'

import {sendHackerIntro} from '../hacker'

let utcObject = getTimeAndDateNow()

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")

    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moonbot':
        case 'moon':
        case 'bot':
        await sendMultipleMessages(webhookEvent.sender.id, info)
        await sendGenMessage(webhookEvent.sender.id, templates['send_intro'])
        break
  
        case 'spojeni':
        case 'spojení':
        await sendMultipleMessages(webhookEvent.sender.id, introIDOS)
        await sendGenMessage(webhookEvent.sender.id, templates['send_idos_intro'])
        break

        case 'vyzkoušet':
        case 'vyzkouset':
        const introTravel = 'spoj volha do hlavni nadrazi'
        await sendIdosAnswer(webhookEvent.sender.id, introTravel, utcObject.utc)
        await sendGenMessage(webhookEvent.sender.id, templates['send_gif'])
        break

        case 'spoj':
        console.log(utcObject.utc)
        console.log(utcObject.time)
        
        sendIdosAnswer(webhookEvent.sender.id, incomeMessage, utcObject.utc)
        break
  
        case 'vse':
        case 'vše':
        await sendGenMessage(webhookEvent.sender.id, templates['get_school'])
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
        case 'hacker':
        const templato = await sendHackerIntro(webhookEvent.sender.id)
        await sendGenMessage(webhookEvent.sender.id, templato)
        break
  
        case 'jb':
        //sendGenMessage(webhookEvent.sender.id, templates['get_jb'])
        break

        case 'napoveda':
        case 'nápověda':
        await sendMultipleMessages(webhookEvent.sender.id, help)
        break

        default:
        await sendTextMessage(webhookEvent.sender.id, 'Tenhle příkaz neznám... promiň :-(')
        await sendGenMessage(webhookEvent.sender.id, templates['send_quick_help'])
        break
    }
}