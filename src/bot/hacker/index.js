import {getUserById} from '../../services/user'


export async function sendHackerTemplate(sender){
    const user = await getUserById(sender)
    console.log(user)

}

export async function getHackerTemplate (button){
    const subButton = button

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
                         subButton
                        ] 
                    }
                ]
            }
        }
    }

    const templateToString = JSON.stringify(template)

    console.log(templateToString)
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
        title: "Nové zprávy",
        payload: "newStories"
   }

   if(isSub === true){
       return unsub
   }else {
       return sub
   }

}