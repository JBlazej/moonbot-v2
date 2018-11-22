import {sendTextMessage, sendGenMessage} from '../lib/messages'
import {templates} from '../../views/templates'

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")
    
    //console.log(webhookEvent)
    //console.log(formattedMessage[0])

    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moon':
        const text1 = 'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.'
        const text2 = 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.'
        const text3 = 'Jo a takhle vypadam. :D'
        const obsah = templates['get_school']
        //sendGenMessage(webhookEvent.sender.id, obsah)

        await sendTextMessage(webhookEvent.sender.id, text1).then(()=>{await sendTextMessage(webhookEvent.sender.id, text2)}).then(()=>{await sendTextMessage(webhookEvent.sender.id, text3)})
        break
  
        case 'napoveda':
        case 'nápověda':
        console.log('hovno')
        break
  
        case 'spojeni':
        case 'spojení':
        console.log('hovno')
        break
  
        case 'vse':
        case 'vše':
        console.log('hovno')
        break
  
        case 'prvak':
        case 'prvák':
        console.log('hovno')
        break
  
        case 'fakulty':
        case 'fakulta':
        console.log('hovno')
        break
  
        case 'koleje':
        case 'kolej':
        console.log('hovno')
        break
  
        case 'insis':
        case 'isis':
        console.log('hovno')
        break
  
        case 'hackernews':
        console.log('hovno')
        break
  
        case 'jb':
        console.log('hovno')
        break
    }
}