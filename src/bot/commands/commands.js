import {sendTextMessage} from '../lib/messages'

export async function commands(event){
    let webhookEvent = event

    let incomeMessage = webhookEvent.message.text.toLowerCase().trim()
    let formattedMessage = incomeMessage.toString().split(" ")
    
    console.log(webhookEvent)
    console.log(formattedMessage[0])

    switch(formattedMessage[0]) {
        case 'ahoj':
        sendTextMessage(webhookEvent.sender.id, 'Kravina')
        break
  
        case 'moon':
        const text1 = 'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.'
        const text2 = 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.'
        const text3 = 'Jo a takhle vypadam. :D'
        console.log('hovno')
        break
  
        case 'napoveda':
        console.log('hovno')
        break
  
        case 'spojeni':
        console.log('hovno')
        break
  
        case 'vse':
        console.log('hovno')
        break
  
        case 'prvak':
        console.log('hovno')
        break
  
        case 'fakulty':
        console.log('hovno')
        break
  
        case 'koleje':
        console.log('hovno')
        break
  
        case 'insis':
        case 'isis':
        console.log('hovno')
        break
  
        case 'hackernews':
        break
  
        case 'jb':
        console.log('hovno')
        break
    }
}