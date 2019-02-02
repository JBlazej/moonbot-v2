import { createNewUser, setLanguage, setCollege, setOffset, setURL } from '../../services/user'

import { sendTextMessage, sendMultipleMessages, sendGenMessage } from '../lib/messages'
import { getStartedPayload, introIDOS } from '../lib/answers'
import { templates } from '../lib/templates'

import { getTimeAndDateNow}  from '../lib/dateAndTime'

import { sendNextIdos } from '../idos'
import { sendHeadAndRep, sendOfficeHours } from '../vse'
import { sendTitle, sendDescription, incrementOffset } from '../news'

export async function payloads(id, payload){
    const utcObject = getTimeAndDateNow()

    let incomePayload = payload.toLowerCase().trim()
    let formattedPayload = incomePayload.toString().split("-")

    console.log(formattedPayload[0])
    console.log(formattedPayload[1])

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

        case 'vse':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'ffu':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'fmv':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'fph':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'fis':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'nf':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'fm':
        await setOffset(id, 0)
        await setURL(id, payload)
        await sendTitle(id)
        break

        case 'article':
        sendDescription(id, formattedPayload[1])
        break

        case 'next':
        await incrementOffset(id)
        await sendTitle(id)
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