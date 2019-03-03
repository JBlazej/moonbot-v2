import { templates } from '../lib/templates'
import { sendTextMessage, sendGenMessage } from '../lib/messages'
import { getUserById, setCount } from '../../services/user'

export async function sendDefaultAnswer(sender){
    let user = getUserById(sender)
    let offset = user[0].count + 1

    if( user[0].count < 2){
        await sendTextMessage(sender, 'Tenhle příkaz neznám.')
        await sendGenMessage(sender, templates['send_intro'])
        
        await setCount(sender, offset)
    } else {
        await sendGenMessage(sender, templates['get_help'])

        await setCount(sender, 0)
    }
}