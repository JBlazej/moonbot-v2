import request from 'request-promise'
import {GRAPH_URL_MESSAGES, PAGE_ACCESS_TOKEN} from '../../conf/graph'

async function makeRequest(options){
  return request(options)

}

export async function sendTextMessage(sender, text){
    let options = {
      url: GRAPH_URL_MESSAGES,
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: sender },
          message: { text: text }
      }
    }
 
    return makeRequest(options)
  }


  export async function sendGenMessage(sender, message){
    var options = {
      url: GRAPH_URL_MESSAGES,
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: sender },
          message: message
      }
    }
 
    return makeRequest(options)
  }

export async function sendIntroduction(id, text1, text2, text3) {
  
  await sendTextMessage(id, text1)
  await sendTextMessage(id, text2)
  await sendTextMessage(id, text3)

}

 