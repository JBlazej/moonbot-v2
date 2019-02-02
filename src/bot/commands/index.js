import { sendTextMessage, sendMultipleMessages, sendGenMessage } from '../lib/messages'
import { getTimeAndDateNow } from '../lib/dateAndTime'
import { sendIdosAnswer } from '../idos'

import { introIDOS, help, googleTranslator, googleMore } from '../lib/answers'
import { templates } from '../lib/templates'

import { sendTraslatedMessage } from '../google'

import { sendNextOfficeHours } from '../vse'

import {getUserById} from '../../services/user'

export async function commands (event) {
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")

    switch (formattedMessage[0]) {
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

        case 'ukaz':
        case 'ukaž':
        await sendMultipleMessages(webhookEvent.sender.id, googleMore)
        await sendTraslatedMessage(webhookEvent.sender.id, 'Přelož Ahoj jak se máš?', 'Přelož')
        break

        case 'jazyk':
        sendGenMessage(webhookEvent.sender.id, templates['get_language'])
        break

        case '▼':
        const utcDay = getTimeAndDateNow()
        const param = await getUserById(webhookEvent.sender.id)
        await sendNextOfficeHours(webhookEvent.sender.id, utcDay.day, param[0].college)
        break
        
        case 'fakulty':
        case 'fakulta':
        //sendGenMessage(webhookEvent.sender.id, templates['get_faculties'])
        break
  
        case 'koleje':
        case 'kolej':
        //sendGenMessage(webhookEvent.sender.id, templates['get_dormitories'])
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