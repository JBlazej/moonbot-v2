import { createNewUser, setLanguage, setCollege, setOffset } from '../../services/user'

import { sendTextMessage, sendMultipleMessages, sendGenMessage } from '../lib/messages'
import { getStartedPayload, introIDOS } from '../lib/answers'
import { templates } from '../lib/templates'

import { getTimeAndDateNow}  from '../lib/dateAndTime'

import { sendNextIdos } from '../idos'
import { sendHackerNews } from '../hacker'
import { sendHeadAndRep, sendOfficeHours } from '../vse'
import { sendTitle, sendDescription, incrementOffset } from '../news'

export async function payloads(id, payload){
    const utcObject = getTimeAndDateNow()

    switch(payload) {
        case 'started-payload':
        await sendMultipleMessages(id, getStartedPayload())
        await sendGenMessage(id, templates['send_intro'])
        await createNewUser(id)
        break

        case 'idos-intro':
        await sendMultipleMessages(id, introIDOS)
        await sendGenMessage(id, templates['send_idos_intro'])
        break

        case 'idos-like':
        await incrementLikeInstance(utcObject.year, 1)
        await sendTextMessage(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.')
        break

        case 'set-en':
        setLanguage(id, 'en')
        sendTextMessage(id, 'Jazyk nastaven.')
        break

        case 'set-de':
        setLanguage(id, 'de')
        sendTextMessage(id, 'Jazyk nastaven.')
        break

        case 'set-es':
        setLanguage(id, 'es')
        sendTextMessage(id, 'Jazyk nastaven.')
        break

        case 'colleges':
        sendGenMessage(id, templates['get_dormitories'])
        break

        case 'faculties':
        sendGenMessage(id, templates['get_faculties'])
        break

        case 'article-vse':
        await setOffset(id, 0)
        await sendTitle(id)
        break

        case 'article-description':
        sendDescription(id)
        break

        case 'article-next':
        await incrementOffset(id)
        await sendTitle(id)
        break

        case 'head-and-representative-1':
        await sendHeadAndRep('1', id)
        break

        case 'head-and-representative-2':
        await sendHeadAndRep('2', id)
        break

        case 'head-and-representative-3':
        await sendHeadAndRep('3', id)
        break

        case 'head-and-representative-4':
        await sendHeadAndRep('4', id)
        break

        case 'head-and-representative-5':
        await sendHeadAndRep('5', id)
        break

        case 'head-and-representative-6':
        await sendHeadAndRep('6', id)
        break

        case 'head-and-representative-7':
        sendHeadAndRep('7', id)
        break

        case 'head-and-representative-8':
        sendHeadAndRep('8', id)
        break

        case 'head-and-representative-9':
        sendHeadAndRep('9', id)
        break

        case 'bla':
        await setCollege(id, payload)
        await sendOfficeHours(id, utcObject.day, payload)
        await sendGenMessage(id, templates['send_hours'])
        break

        case 'jarIE':
        await setCollege(id, payload)
        await sendOfficeHours(id, utcObject.day, payload)
        await sendGenMessage(id, templates['send_hours'])
        break

        case '10':
        sendNextIdos(id, 10)
        break
        
        case '30':
        sendNextIdos(id, 30)
        break

        case '60':
        sendNextIdos(id, 60)
        break
    }
}