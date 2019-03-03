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
    
    let sender = id

    let incomePayload = payload.toLowerCase().trim()
    let formattedPayload = incomePayload.toString().split("-")

    switch(formattedPayload[0]) {
        case 'started':
        await sendMultipleMessages(sender, getStartedPayload())
        await sendGenMessage(sender, templates['send_intro'])
        await createNewUser(sender)
        break

        case 'set':
        setLanguage(sender, formattedPayload[1])
        sendTextMessage(sender, 'Jazyk' + formattedPayload[1].toUpperCase() + 'byl nastaven.')
        break

        case 'colleges':
        sendGenMessage(sender, templates['get_dormitories'])
        break

        case 'faculties':
        sendGenMessage(sender, templates['get_faculties'])
        break

        case 'facultie':
        await sendTitle(sender, 0, formattedPayload[1])
        break

        case 'subscribe':
        await setFacultie(sender, formattedPayload[1])
        await sendTextMessage(sender, 'Tvoje fakulta je ' + formattedPayload[1].toUpperCase() + '.')
        break

        case 'cancel':
        await setFacultie(sender, 'vse')
        await sendTextMessage(sender, 'Tvoje fakulta byla zrušena.')
        break

        case 'article':
        sendDescription(sender, formattedPayload[1], formattedPayload[2])
        break

        case 'next':
        await sendTitle(sender, formattedPayload[1], formattedPayload[2])
        break

        case 'head':
        await sendHeadAndRep(sender, formattedPayload[1])
        break

        case 'bla':
        await setCollege(sender, payload)
        await sendOfficeHours(sender, utcObject.day, payload)
        await sendGenMessage(sender, templates['send_hours'])
        break

        case 'jarie':
        await setCollege(sender, payload)
        await sendOfficeHours(sender, utcObject.day, payload)
        await sendGenMessage(sender, templates['send_hours'])
        break

        case '10':
        sendNextIdos(sender, 10)
        break
        
        case '30':
        sendNextIdos(sender, 30)
        break

        case '60':
        sendNextIdos(sender, 60)
        break
    }
}