import { sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'

export async function sendHeadAndRep(id, sender) {
    let data = await getDormitoryById(id)
    let head = [
        data[0].contact.head.name,
        data[0].contact.head.email,
        data[0].contact.head.phone
    ]

    let rep = [
        data[0].contact.representative.name,
        data[0].contact.representative.email,
        data[0].contact.representative.phone
    ]

    await sendMultipleMessages(sender, head)
    await sendMultipleMessages(sender, rep)

}