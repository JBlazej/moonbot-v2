import {getUserById} from '../../services/user'
import {sendGenMessage} from '../lib/messages'
import request from 'request-promise'


export async function sendHackerTemplate(sender){
    const user = await getUserById(sender)
    const button = await getSubButton(user[0].hacker)
    const template = await getHackerTemplate(button)

    return template
}

export async function getHackerTemplate (button){
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


async function getSubButton(isSub){
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

   if(isSub === true){
       return unsub
   }else {
       return sub
   }

}

const topStories = 'https://hacker-news.firebaseio.com/v0/topstories'
const printPara  = '.json?print=pretty'
const hackerItem = 'https://hacker-news.firebaseio.com/v0/item/'

export async function sendTopStories(sender) {

    request(topStories + printPara, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    let top = body;
    console.log(top)
  
    let smtg = top.toString().split(",",3);
      if(smtg){
    
        for (var i = 0; i < 3; i++) {
            request( hackerItem + smtg[i] + printPara, { json: true }, (err, res, body) => {
            if (err) { return console.log(err) }
            let title = body.title
            let url = body.url
            let type = body.type
            let text = body.text
  
            if(!url){
              url = "https://news.ycombinator.com";
            }

            let hackerMessage = {
              attachment:{
                type: "template",
                payload: {
                  template_type: "generic",
                          elements: [
                              {
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
                  ]
                }
              }
            }
            
            console.log(hackerMessage)

            sendGenMessage(sender, hackerMessage)
          })
        }
      }
    })
  }