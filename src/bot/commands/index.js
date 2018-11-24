import {sendTextMessage, sendIntroduction} from '../lib/messages'
import {getTime, getDate} from '../lib/dateAndTime'
//import {templates} from '../../views/templates'
import {sendIdosAnswer} from '../idos'
import {intro} from '../../views/messages'

import {createNewUser} from '../../models/v1/user'

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")


    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moon':
        sendIntroduction(webhookEvent.sender.id, intro[0], intro[1], intro[2])
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
        let utcNow = new Date()
        let time = await getTime(utcNow)
        let date = await getDate(utcNow)
        sendIdosAnswer(webhookEvent.sender.id, webhookEvent.message.text, time, date)
        break
  
        case 'vse':
        case 'vše':
        const help = await getUserAll()
        console.log(help)
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