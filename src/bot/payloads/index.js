import {createNewUser, setHackerNews, setLanguage } from '../../services/user'
import {incrementLikeInstance} from '../../services/like'

import {sendTextMessage, sendMultipleMessages, sendGenMessage} from '../lib/messages'
import {getStartedPayload, introIDOS} from '../lib/answers'
import {templates} from '../lib/templates'

import {getTimeAndDateNow} from '../lib/dateAndTime'

import {sendNextIdos} from '../idos'
import {sendHackerNews} from '../hacker'

export async function payloads(id, payload){
    switch(payload) {
        case 'started-payload':
        await sendMultipleMessages(id, getStartedPayload())
        await sendGenMessage(id, templates['send_info'])
        await createNewUser(id)
        break

        case 'idos-intro':
        await sendMultipleMessages(id, introIDOS)
        await sendGenMessage(id, templates['send_idos_intro'])
        break

        case 'idos-next':
        sendNextIdos(id)
        break

        case 'idos-like':
        const utcObject = getTimeAndDateNow()
        await incrementLikeInstance(utcObject.year, 1)
        await sendTextMessage(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.')
        break

        case 'hacker-intro':
        //Neco
        break

        case 'hacker-new-news':
        sendHackerNews(id)
        break

        case 'hacker-subscribe':
        setHackerNews(id, true)
        sendTextMessage(id, 'Děkuj za tvůj odběr.')
        break

        case 'hacker-unsubscribe':
        setHackerNews(id, false)
        sendTextMessage(id, 'Nevadí tak kdyžtak příště.')
        break

        case 'set-en':
        setLanguage(id, 'en')
        sendTextMessage(id, 'Jazyk nastaven')
        break

        case 'set-de':
        setLanguage(id, 'de')
        sendTextMessage(id, 'Jazyk nastaven')
        break

        case 'set-es':
        setLanguage(id, 'es')
        sendTextMessage(id, 'Jazyk nastaven')
        break
    
        case 'vse':
        break

        case 'ffu':
        break

        case 'fmv':
        break

        case 'fph':
        break

        case 'fis':
        break

        case 'nf':
        break

        case 'fm':
        break

        case 'blanice':
        break

        case 'vltava':
        break

        case 'jarov1':
        break

        case 'jarov1E':
        break

        case 'jarov2':
        break

        case 'jarov3G':
        break

        case 'roos':
        break

        case 'svec':
        break

        case 'sayAboutMe':
        break
    }
}