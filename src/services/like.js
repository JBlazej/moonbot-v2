import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (setYear, setLike) {
    const like = new Like({year : setYear, likes : setLike})

    like.save()
    
    return like
}

export async function incrementLikeInstance (year, set){
    const like = await getLikeInstance(year)
    like[0].likes = like[0].likes + set

    console.log(typeof like[0].likes)
    console.log(like[0].likes)

    return like
}


export async function getLikeInstance (year) {
    const like = Like.find({"year": year})
    
    return like
}