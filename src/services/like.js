import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (year, like) {
    const like = new Like({year : year, like : like})

    like.save()
    
    console.log(like)
    return user
}


createNewLikeInstance(2018, 0)