import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'

export async function sendHeadAndRep (id) {
    let data = await getDormitoryById(id)

    console.log(data[0].contact.head.name)
    console.log(data[0].contact.head.email)
    console.log(data[0].contact.head.phone)
}