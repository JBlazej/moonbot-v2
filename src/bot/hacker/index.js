import {getUserById} from '../../services/user'


export async function sendHackerTemplate(sender){
    const user = await getUserById(sender)

    const isSub = user
    console.log(typeof isSub)
    console.log(isSub)
    const subButton = await getSubButton(isSub)
    const template = await getHackerTemplate(subButton)

    //console.log(template)

    return template

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

    console.log(typeof template)
    console.log(template)
    console.log(typeof template.attachment)
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
        payload: "newStories"
   }

   if(isSub === true){
       return unsub
   }else {
       return sub
   }

}