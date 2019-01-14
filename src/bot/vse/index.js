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

export async function sendOfficeHours(sender, day) {
    let id = day
    let data = await getOfficeById(id)

    let answer = [
        data[0].nameOfDay,
        data[0].opening
    ]

    await sendMultipleMessages(sender, answer)
}

export async function sendNextOfficeHours(sender, dayNow){

    let remove = dayNow

    var array = [1, 2, 3, 4, 5]
    var index = array.indexOf(remove)
    
    if (index > -1) {
        array.splice(index, 1)
    }   

    for(var i in array){
        await sendOfficeHours(sender, array[i])
    }
}