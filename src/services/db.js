import mongoose from 'mongoose'
import {User} from '../models/v1/user'

export class UserService {
    constructor(){
        
    }
    
    async setHackerNews(id, param){
        let data = {
            hacker : param
        }
    
        const user = User.findOneAndUpdate({id : id}, data, {new : true})
        console.log(user)
        return user
    }
}