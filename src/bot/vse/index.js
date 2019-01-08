import { sendTextMessage, sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'
import { getOfficeById } from '../../services/office'

import {getTimeAndDateNow} from '../lib/dateAndTime'

export async function sendHeadAndRep(id, sender) {
    let data = await getDormitoryById(id)

    let head = [
        data[0].contact.head.name,
        data[0].contact.head.email,
        data[0].contact.head.phone
    ]

    await sendMultipleMessages(sender, head)

}

export async function sendOfficeHours(sender) {
    let utc = await getTimeAndDateNow()
    console.log(typeof utc.day)
    console.log(utc.day)
    let data = await getOfficeById('1')

    let answer = [
        data[0].nameOfDay,
        data[0].opening
    ]

    console.log(answer)
    
    await sendMultipleMessages(sender, answer)
}