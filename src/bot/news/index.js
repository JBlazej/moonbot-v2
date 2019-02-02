import request from 'request'
import { parseString } from 'xml2js'
import { sendMultipleMessages, sendGenMessage } from '../lib/messages'

export async function getFeed(id, offset, param){
    const url = param ? 'https://' + param + '.vse.cz/archiv/aktuality?feed=rss' : 'https://vse.cz/archiv/aktuality?feed=rss'

    request(url, (error, response, body) => {
        const xml = body.toString()

        parseString(xml, (err, result) => {
            const title = result.rss.channel[0].item[offset].title.toString()
            const link = result.rss.channel[0].item[offset].link.toString()
            const description = result.rss.channel[0].item[offset].description.toString()

            const modDescription  = description.replace('[&#8230;]', '...')

            let message = [
                title,
                modDescription
            ]

            let postback = {
                attachment:{
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: modDescription,
                        buttons:[
                            {
                                type: "postback",
                                title: "Popis",
                                payload: "article-description",
                            },
                            {
                                type: "postback",
                                title: "Další článek",
                                payload: "article-next",
                            }
                        ]
                    }
                }
            }

            sendGenMessage(id, postback)
        });
    });
}