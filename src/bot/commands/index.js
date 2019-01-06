import { sendTextMessage, sendMultipleMessages, sendGenMessage } from '../lib/messages'
import { getTimeAndDateNow } from '../lib/dateAndTime'
import { sendIdosAnswer } from '../idos'

import { introIDOS, help, googleTranslator, googleIntro, googleMore } from '../lib/answers'
import { templates } from '../lib/templates'

import { sendHackerIntro } from '../hacker'
import { sendTranslatedText, sendTraslatedMessage } from '../google'

export async function commands (event) {
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")

    switch (formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'spojeni':
        case 'spojení':
        await sendMultipleMessages(webhookEvent.sender.id, introIDOS)
        await sendGenMessage(webhookEvent.sender.id, templates['send_idos_intro'])
        break

        case 'vyzkoušet':
        case 'vyzkouset':
        const utcObject = getTimeAndDateNow()
        const introTravel = 'spoj volha do hlavni nadrazi'
        await sendIdosAnswer(webhookEvent.sender.id, introTravel, utcObject.utc)
        break

        case 'spoj':
        const utcObj = getTimeAndDateNow()    
        sendIdosAnswer(webhookEvent.sender.id, incomeMessage, utcObj.utc)
        break

        case 'translator': 
        await sendMultipleMessages(webhookEvent.sender.id, googleTranslator)
        await sendGenMessage(webhookEvent.sender.id, templates['send_next_translator'])
        break
  
        case 'preloz':
        case 'přelož':
        await sendTraslatedMessage(webhookEvent.sender.id, incomeMessage, formattedMessage[0])
        break

        case 'vse':
        case 'vše':
        await sendGenMessage(webhookEvent.sender.id, templates['get_school'])
        break

        case 'zjistit':
        await sendMultipleMessages(webhookEvent.sender.id, googleIntro)
        await sendGenMessage(webhookEvent.sender.id, templates['send_last_translator'])
        break

        case 'ano':
        await sendMultipleMessages(webhookEvent.sender.id, googleMore)
        await sendTraslatedMessage(webhookEvent.sender.id, 'Přelož Ahoj jak se máš?', 'Přelož')
        break

        case 'ne':
        sendTextMessage(webhookEvent.sender.id, 'Haha')
        break

        case 'nastavení':
        case 'nastaveni':
        sendGenMessage(webhookEvent.sender.id, templates['get_language'])
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
  
        case 'novinky':
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
        await sendTextMessage(webhookEvent.sender.id, 'Tenhle příkaz neznám.')
        await sendGenMessage(webhookEvent.sender.id, templates['send_intro'])
        break
    }
}