import { createNewUser, setLanguage, setCollege, setOffset, setURL , setFacultie} from '../../services/user'

import { sendTextMessage, sendMultipleMessages, sendGenMessage } from '../lib/messages'
import { getStartedPayload, introIDOS } from '../lib/answers'
import { templates } from '../lib/templates'

import { getTimeAndDateNow }  from '../lib/dateAndTime'

import { sendNextIdos } from '../idos'
import { sendHeadAndRep, sendOfficeHours } from '../vse'
import { sendTitle, sendDescription, incrementOffset } from '../news'

export async function payloads(id, payload){
    const utcObject = getTimeAndDateNow()

    let incomePayload = payload.toLowerCase().trim()
    let formattedPayload = incomePayload.toString().split("-")

    switch(formattedPayload[0]) {
        case 'started':
        await sendMultipleMessages(id, getStartedPayload())
        await sendGenMessage(id, templates['send_intro'])
        await createNewUser(id)
        break

        case 'set':
        setLanguage(id, formattedPayload[1])
        sendTextMessage(id, 'Jazyk nastaven.')
        break

        case 'colleges':
        sendGenMessage(id, templates['get_dormitories'])
        break

        case 'faculties':
        sendGenMessage(id, templates['get_faculties'])
        break

        case 'facultie':
        await sendTitle(id, 0, formattedPayload[1])
        break

        case 'subscribe':
        await setFacultie(id, formattedPayload[1])
        await sendTextMessage(id, 'Tvoje fakulta je ' + formattedPayload[1])
        
        break

        case 'article':
        sendDescription(id, formattedPayload[1], formattedPayload[2])
        break

        case 'next':
        await sendTitle(id, formattedPayload[1], formattedPayload[2])
        break

        case 'head':
        await sendHeadAndRep(id, formattedPayload[1])
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