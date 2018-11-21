import request from 'request'
import {GRAPH_URL_MESSAGES, PAGE_ACCESS_TOKEN} from '../conf/graph'

export function sendTextMessage(sender, text){
    let options = {
      url: GRAPH_URL_MESSAGES,
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: sender },
          message: { text: text }
      }
    }
 
    return request(options)
  }


  export function sendGenMessage(sender, message){
    var options = {
      url: GRAPH_URL_MESSAGES,
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: sender },
          message: message
      }
    }
 
    return request(options)
  }