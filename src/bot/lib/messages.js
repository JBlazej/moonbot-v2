import request from 'request'
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
 
    return await makeRequest(options)
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
 
    return await makeRequest(options)
  }