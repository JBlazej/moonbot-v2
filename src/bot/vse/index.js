import { sendGenMessage,sendMultipleMessages } from '../lib/messages'
import { getDormitoryById } from '../../services/dormitory'
import { getOfficeById } from '../../services/office'
import { getUserById } from '../../services/user'

import { templates } from '../lib/templates'

export async function sendHeadAndRep(sender, id) {
    let data = await getDormitoryById(id)

    let head = [
        data[0].contact.head.name,
        data[0].contact.head.email,
        data[0].contact.head.phone
    ]

    await sendMultipleMessages(sender, head)

}

export async function sendOfficeHours(sender, day, college) {
    let id = day
    let data = await getOfficeById(id, college)

    let answer = [
        data[0].nameOfDay,
        data[0].opening
    ]

    await sendMultipleMessages(sender, answer)
}

export async function sendNextOfficeHours(sender, dayNow, college){

    let remove = dayNow

    var array = [1, 2, 3, 4, 5]
    var index = array.indexOf(remove)
    
    if (index > -1) {
        array.splice(index, 1)
    }   

    for(var i in array){
        await sendOfficeHours(sender, array[i], college)
    }
}


export async function sendVSETemplate(sender){
    const user = await getUserById(sender)
    
    if (user[0].facultie !== 'vse'){
        const facultieTemplate = templates[user[0].facultie] 

        let message = {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                        {
                            title: "Vysoká škola ekonomická v Praze",
                              image_url: "https://moonbot-v2-front.herokuapp.com/bot/vse.png",
                              subtitle: "Základní informace o škole, kde jsem byl vytvořen.",
                              default_action: {
                                type: "web_url",
                                url: "www.vse.cz",
                                messenger_extensions: "FALSE",
                                webview_height_ratio: "FULL"
                            },
                            buttons: [
                                {
                                    type: "postback",
                                    title: "Fakulty",
                                    payload: "faculties"
                                },
                                {
                                    type: "postback",
                                    title: "Koleje",
                                    payload: "colleges"
                                },
                                {
                                    type: "postback",
                                    title: "Novinky",
                                    payload: "facultie-vse"
                                }
                            ]
                        },
                        facultieTemplate
                        
                    ]
                }
            }
        }
        
        sendGenMessage(sender, message)
    } else {
    
        let messageVSE = {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [
                        {
                            title: "Vysoká škola ekonomická v Praze",
                              image_url: "https://moonbot-v2-front.herokuapp.com/bot/vse.png",
                              subtitle: "Základní informace o škole, kde jsem byl vytvořen.",
                              default_action: {
                                type: "web_url",
                                url: "www.vse.cz",
                                messenger_extensions: "FALSE",
                                webview_height_ratio: "FULL"
                            },
                            buttons: [
                                {
                                    type: "postback",
                                    title: "Fakulty",
                                    payload: "faculties"
                                },
                                {
                                    type: "postback",
                                    title: "Koleje",
                                    payload: "colleges"
                                },
                                {
                                    type: "postback",
                                    title: "Novinky",
                                    payload: "facultie-vse"
                                }
                            ]
                        }
                    ]
                }
            }
        }

        sendGenMessage(sender, messageVSE)
    }
}