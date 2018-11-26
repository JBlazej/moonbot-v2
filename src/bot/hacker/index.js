import {getUserById} from '../../services/user'
import {sendGenMessage} from '../lib/messages'
import request from 'request-promise'

const topStories = 'https://hacker-news.firebaseio.com/v0/topstories'
const printPara  = '.json?print=pretty'
const hackerItem = 'https://hacker-news.firebaseio.com/v0/item/'

export async function getHackerIntroTemplate (button) {
    const templateButton = button

    let template = {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: [
                    {
                        title: "Hacker news",
                        image_url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/hackernews.png",
                        subtitle: "Nejnovější zprávy ze světa kybernetiky a ne jen to.",
                        default_action: {
                            type: "web_url",
                            url: "https://news.ycombinator.com",
                            messenger_extensions: "FALSE",
                         webview_height_ratio: "TALL"
                        },
                        buttons: [
                         // TADY VLOŽIT
                         {
                            type: "postback",
                            title: "Jak to funguje?",
                            payload: "hacker-info"
                        },
                        {
                            type: "postback",
                            title: "Zobrazit nové zprávy",
                            payload: "newStories"
                        },
                         templateButton
                        ] 
                    }
                ]
            }
        }
    }

    const templateToString = JSON.stringify(template)

    return templateToString
}


async function getSubButton(isSub) {
    const sub = {
        type: "postback",
        title: "Odběr",
        payload: "subHacker"
    }

    const unsub = {
        type: "postback",
        title: "Zrušit odběr",
        payload: "unsubHacker"
   }

   if(isSub === true) {
       return unsub
   }else {
       return sub
   }

}

export async function sendHackerIntro(sender){
    const user = await getUserById(sender)
    const button = await getSubButton(user[0].hacker)
    const template = await getHackerIntroTemplate(button)

    return template
}

function getRequestBody(url, callback) {
    request.get(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
        const info = JSON.parse(body)
      
        callback(null, info)
        }
    }) 
}

export async function sendHackerNews(sender) {
    const URL_TOP_ALL = topStories + printPara
    const message = []

    getRequestBody(URL_TOP_ALL, (error, body) => {
        let result = body
        let storyNumber = result.toString().split(",",3)

        if(storyNumber){
            for(var i = 0; i < storyNumber.length; i++){
                const URL_TOP_ONE = hackerItem + storyNumber[i] + printPara
                getRequestBody(URL_TOP_ONE, (error, body) => {
                    let title = body.title
                    let url = body.url
                    let type = body.type
                    let text = body.text
                
                    if(!url){
                    url = "https://news.ycombinator.com";
                    }
                
                    let templateElement = {
                        title: title,
                        subtitle: type,
                        image_url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/hackerLogo.png",
                        default_action: {
                            type: "web_url",
                            url: url,
                            messenger_extensions: "FALSE",
                            webview_height_ratio: "FULL"
                        },
                        buttons:[
                            {
                                type: "element_share"
                    
                            }
                        ]
                    }

                    message.push(templateElement)
                    

                    if(message.length === storyNumber.length) {
                        let hackerMessage = {
                            attachment:{
                                type: "template",
                                payload: {
                                    template_type: "generic",
                                    elements: message
                                }
                            }
                        }

                        sendGenMessage(sender, hackerMessage)

                    }
                })
            }
        }else {
            console.log('Error')
        }
    })
}