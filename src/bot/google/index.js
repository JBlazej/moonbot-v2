import { serviceID, gooAuth } from '../../conf/google'
import { Translate } from '@google-cloud/translate'
import { sendTextMessage } from '../lib/messages'


export async function sendTranslatedText (id, text, language) {
    const translate = new Translate({ projectId: serviceID, credentials: gooAuth })

    const text = text
    const target = language

    translate
        .translate(text, target)
        .then(results => {
        const translation = results[0]

        sendTextMessage(id, translation)
        })
    .catch(err => {
        console.error('ERROR:', err)
    })
}




