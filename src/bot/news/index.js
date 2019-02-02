import request from 'request'
import { parseString } from 'xml2js'
import { sendMultipleMessages, sendGenMessage, sendTextMessage } from '../lib/messages'

import { getUserById, setOffset, setURL } from '../../services/user'

export async function sendTitle(id){
    const user = await getUserById(id)

    const param = user[0].url
    const offset = user[0].offset

    // Z API CHODÍ 10 ČLÁNKŮ
    if (offset < 10) {
        const url = param === 'vse' ? 'https://vse.cz/archiv/aktuality?feed=rss' : 'https://' + param + '.vse.cz/archiv/aktuality?feed=rss'
        
        request(url, (error, response, body) => {
        const xml = body.toString()
        
        parseString(xml, (err, result) => {
            const title = result.rss.channel[0].item[offset].title.toString()
            const link = result.rss.channel[0].item[offset].link.toString()
    
            let message = {
                attachment:{
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: title,
                        buttons:[
                            {
                                type: "postback",
                                title: "Popis",
                                payload: "article-" + offset + "-" + param,
                            },
                            {
                                type: "postback",
                                title: "Další článek",
                                payload: "next",
                            }
                        ]
                    }
                }
            }
            sendGenMessage(id, message)
        });
    });
    } else {
        sendTextMessage(id, 'Žádné nové články.')
    }
}

export async function sendDescription(id, off, par){
    const param = par
    const offset = off

    const url = param === 'vse' ? 'https://vse.cz/archiv/aktuality?feed=rss' : 'https://' + param + '.vse.cz/archiv/aktuality?feed=rss'

    request(url, (error, response, body) => {
        const xml = body.toString()

        parseString(xml, (err, result) => {
            const link = result.rss.channel[0].item[offset].link.toString()
            
            const description = result.rss.channel[0].item[offset].description.toString()
            const modDescription  = description.replace('[&#8230;]', '...')

            console.log(modDescription.length)

            let message = {
                attachment:{
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: modDescription,
                        buttons:[
                            {
                                type: "web_url",
                                title: "Odkaz na článek",
                                url: link,
                            },
                            {
                                type: "postback",
                                title: "Další článek",
                                payload: "next",
                            }
                        ]
                    }
                }
            }

            sendGenMessage(id, message)
        });
    });
}

export async function incrementOffset(id){
    const user = await getUserById(id)
    const offset = user[0].offset < 10 ? user[0].offset + 1 : 10

    setOffset(id, offset)

    return offset
}

export async function sendQuickNews(id, message){
    let incomeNews = message.toLowerCase().trim()
    let formattedNews = incomeNews.toString().split(" ")

    if(formattedNews.length === 1){
        await setOffset(id, 0)
        await sendTitle(id)
    } else {
        await setOffset(id, 0)
        const help = await setURL(id, formattedNews[1])
        console.log(help)
        console.log(typeof help)
        await sendTitle(id)
    }
}