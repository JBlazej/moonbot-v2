import mongoose from 'mongoose'
import {User} from '../models/v1/user'



export async function setHackerNews(id, param){
    let data = {
        hacker : param
    }

    const user = await User.findOneAndUpdate({id : id}, data, {new : true})
    console.log(user)
    return user
}
