import {sendTextMessage} from '../lib/messages'
import {sendIdosAnswer, sendNextIdos} from '../idos'

export async function payloads(id, payload){

    switch(payload) {
        case 'started-payload':
        //let date = getTime(new Date())

        const msg1 = 'Ahoj já jsem Moonbot. Je --10:30-- hodin a Ty si mě zrovna oživil'
        const msg2 = 'Jak se máš? Já se mám dneska fakt skvěle. Konečně je tu někdo komu můžu pomoct'
        const msg3 = 'Napiš příkaz moon a já ti o sobě řeknu více'

        await sendTextMessage(id, msg1).then(()=>{sendTextMessage(id, msg2)}).then(()=>{sendTextMessage(id, msg3)})
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