import {sendIntroduction, sendMultipleMessages, sendGenMessage} from '../lib/messages'

import {sendNextIdos} from '../idos'

import {starter} from '../../views/messages'

import {createNewUser} from '../../models/v1/user'

import {templates} from '../../views/templates'

export async function payloads(id, payload){

    switch(payload) {
        case 'started-payload':
        await sendMultipleMessages(id, starter)
        await sendGenMessage(id, templates['send_intro'])
        await createNewUser(id)
        break

        case 'newStories':
        break

        case 'subHacker':
        break

        case 'unsubHacker':
        break

        case 'like':
        break

        case 'next':
        sendNextIdos(id)
        break

        case 'howToIdos':
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