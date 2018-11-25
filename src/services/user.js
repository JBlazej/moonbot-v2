import mongoose from 'mongoose'
import {User} from '../models/v1/user'
    
export async function setHackerNews(id, param){
    let data = {
        hacker : param
    }
    
    const user = User.findOneAndUpdate({id : id}, data, {new : true})
    console.log(user)
    return user
}

export async function getUserAll () {
    const user = User.find({})

    return user
}

export async function getUserById (id) {
    const user = User.find({"id": id})
    
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

    const user = User.findOneAndUpdate({id : id}, data, {new : true})
    
    return user
}

export async function setHackerNews(id, param){
    let data = {
        hacker : param
    }

    const user = User.findOneAndUpdate({id : id}, data, {new : true})
    
    return user
}

export async function updateUserById (id) {
    let data = {
        id : id
    }

    const user = User.findOneAndUpdate({id : id}, data, {new: true})
    
    return user
}

export async function createNewUser (id) {
    const User = User
    const user = new User({id : id})

    const help = await getUserById(id)

    if(help.length === 0) {
        user.save()
        return user
    } else {
        updateUserById(id)
    }
}