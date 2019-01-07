import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'

export async function sendHeadAndRep (id) {
    let data = await getDormitoryById(id)
    let head = [
        data[0].contact.head.name,
        data[0].contact.head.email,
        data[0].contact.head.phone
    ]
    console.log(typeof head)
    console.log(head)

}