import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (setYear, setLike) {
    const like = new Like({year : setYear, likes : setLike})

    like.save()
    
    return like
}

export async function incrementLikeInstance (year){
    const like = await getLikeInstance(year)
    const a = like[0].likes

    console.log(typeof a)
    console.log(a)

    ++a

    console.log(a)
    
    return like
}


export async function getLikeInstance (year) {
    const like = Like.find({"year": year})
    
    return like
}