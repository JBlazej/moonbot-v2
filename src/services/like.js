import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (setYear, setLike) {
    const like = new Like({year : setYear, like : setLike})

    like.save()
    
    console.log(like)
    return user
}


createNewLikeInstance(2018, 0)