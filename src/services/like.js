import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (setYear, setLike) {
    const like = new Like({year : setYear, likes : setLike})

    like.save()
    
    return like
}

export async function incrementLikeInstance (year, set){
    const like = await getLikeInstance(year)
    console.log(like)
    console.log(like.lenght)
    
    like[0].likes = like[0].likes + set

    const newLikeNumber = await updateLikeInstance(year, like[0].likes)

    return newLikeNumber
}


export async function getLikeInstance (year) {
    const like = Like.find({"year": year})
    
    return like
}

export async function updateLikeInstance (year, likeNumber) {
    let data = {
        likes : likeNumber
    }

    const like = Like.findOneAndUpdate({year : year}, data, {new: true})
    
    return like
}