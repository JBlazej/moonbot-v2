import {sendTextMessage, sendGenMessage} from '../lib/messages'
//import {templates} from '../../views/templates'
import {sendIdosAnswer} from '../idos'

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")
    
    //console.log(webhookEvent)
    //console.log(formattedMessage[0])

    function sendMessages (id) {
        const text1 = 'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.'
        const text2 = 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.'
        const text3 = 'Jo a takhle vypadam. :D'
        await sendTextMessage(id, text1)
        await sendTextMessage(id, text2)
        await sendTextMessage(id, text3)
    }

    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moon':

        //sendGenMessage(webhookEvent.sender.id, obsah)
        sendMessages(webhookEvent.sender.id)
        break
  
        case 'napoveda':
        case 'nápověda':
        //sendGenMessage(webhookEvent.sender.id, templates['send_quick'])
        break
  
        case 'spojeni':
        case 'spojení':
        //sendGenMessage(webhookEvent.sender.id, templates['get_idos'])
        break

        case 'spoj':
        sendIdosAnswer('1986144768118336',webhookEvent.message.text, '20:30', '22.11.2018')
        break
  
        case 'vse':
        case 'vše':
        //sendGenMessage(webhookEvent.sender.id, templates['get_school'])
        break
  
        case 'prvak':
        case 'prvák':
        //sendGenMessage(webhookEvent.sender.id, templates['send_manual'])
        break
  
        case 'fakulty':
        case 'fakulta':
        //sendGenMessage(webhookEvent.sender.id, templates['get_faculties'])
        break
  
        case 'koleje':
        case 'kolej':
        //sendGenMessage(webhookEvent.sender.id, templates['get_dormitories'])
        break
  
        case 'insis':
        case 'isis':
        //sendGenMessage(webhookEvent.sender.id, templates['get_isis'])
        break
  
        case 'hackernews':
        //sendGenMessage(webhookEvent.sender.id, templates['get_hackernews'])
        break
  
        case 'jb':
        //sendGenMessage(webhookEvent.sender.id, templates['get_jb'])
        break
    }
}