import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'

export async function sendHeadAndRep (id) {
    let data = await getDormitoryById(id)

    console.log(data)
    console.log(typeof data)
}