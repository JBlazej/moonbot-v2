import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'
import { getOfficeById } from '../../services/office'

export async function sendHeadAndRep(id, sender) {
    let data = await getDormitoryById(id)

    let head = [
        data[0].contact.head.name,
        data[0].contact.head.email,
        data[0].contact.head.phone
    ]

    await sendMultipleMessages(sender, head)

}

export async function sendOfficeHours(id, sender) {
    let data = await getOfficeById(id)

    let monday = data[0].monday

    await sendTextMessage(sender, monday)
}