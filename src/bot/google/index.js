import { gooAuth } from '../../conf/google'
import { Translate } from '@google-cloud/translate'
import { sendTextMessage } from '../lib/messages'


export async function sendTranslatedText (id, setText, setlanguage) {
    const translate = new Translate({ projectId: gooAuth.project_id, credentials: gooAuth })

    const text = setText
    const target = setlanguage
    console.log(text)
    transformTextForGoogle(setText, 'preloz')

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

function transformTextForGoogle(text, command){
    const onlyText = text.replace(command +" ", "")
    console.log(onlyText)
    return onlyText
  }



