import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'
import { getOfficeById } from '../../services/office'

export async function sendHeadAndRep(id, sender) {
    let data = await getDormitoryById(id)

    let head = data[0].contact.head.name + ' ' + data[0].contact.head.email + ' ' + data[0].contact.head.phone
    let rep = data[0].contact.representative.name + ' ' + data[0].contact.representative.email + ' ' + data[0].contact.representative.phone

    await sendTextMessage(sender, head)
    await sendTextMessage(sender, rep)

}

export async function sendOfficeHours(id, sender) {
    let data = await getOfficeById(id)

    let monday = data[0].monday

    await sendTextMessage(sender, monday)
}