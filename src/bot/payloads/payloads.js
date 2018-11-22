import {sendTextMessage} from '../lib/messages'

export async function payloads(id, payload){

    switch(payload) {
        case 'started-payload':
        sendTextMessage(id, 'Tady je starting payload')
        break
    }
}