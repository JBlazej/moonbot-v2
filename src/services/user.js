import mongoose from 'mongoose'
import {User} from '../models/v1/user'
    
export  async function setHackerNews(id, param){
    let data = {
        hacker : param
    }
    
    const user = User.findOneAndUpdate({id : id}, data, {new : true})
    console.log(user)
    return user
}

export async function getUserAll () {
    const user = await getDB().model('User', UserSchema).find({})

    return user
}

export async function getUserById (id) {
    const user = await getDB().model('User', UserSchema).find({"id": id})
    
    return user
  }

export async function modifyUserById (id, from, to, utcTimeAndDate) {
    let data = {
        station: {
            from : from,
            to : to,
            time : utcTimeAndDate
        }
    }

    const user = await getDB().model('User', UserSchema).findOneAndUpdate({id : id}, data, {new : true})
    
    return user
}

export async function setHackerNews(id, param){
    let data = {
        hacker : param
    }

    const user = await getDB().model('User', UserSchema).findOneAndUpdate({id : id}, data, {new : true})
    
    return user
}

export async function updateUserById (id) {
    let data = {
        id : id
    }

    const user = await getDB().model('User', UserSchema).findOneAndUpdate({id : id}, data, {new: true})
    
    return user
}

export async function createNewUser (id) {
    const User = await getDB().model('User', UserSchema)
    const user = new User({id : id})

    const help = await getUserById(id)

    if(help.length === 0) {
        user.save()
        return user
    } else {
        updateUserById(id)
    }
}