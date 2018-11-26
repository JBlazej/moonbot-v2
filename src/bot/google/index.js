import { serviceID, gooAuth } from '../../conf/google'
import { Translate } from '@google-cloud/translate'
import { sendTextMessage } from '../lib/messages'


export async function sendTranslatedText (id, setText, setlanguage) {
    console.log(gooAuth)
    const translate = new Translate({ projectId: serviceID, credentials: gooAuth })

    const text = setText
    const target = setlanguage

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



