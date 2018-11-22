import {sendTextMessage} from '../lib/messages'

export async function payloads(id, payload){

    switch(payload) {
        case 'started-payload':
        //let date = getTime(new Date())

        const msg1 = 'Ahoj já jsem Moonbot. Je --10:30-- hodin a Ty si mě zrovna oživil'
        const msg2 = 'Jak se máš? Já se mám dneska fakt skvěle. Konečně je tu někdo komu můžu pomoct'
        const msg3 = 'Napiš příkaz moon a já ti o sobě řeknu více'

        await sendTextMessage(id, msg1).then(()=>{sendTextMessage(webhookEvent.sender.id, msg2)}).then(()=>{sendTextMessage(webhookEvent.sender.id, msg3)})
        break
    }
}