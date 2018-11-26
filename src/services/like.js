import mongoose from 'mongoose'
import {Like} from '../models/v1/like'

export async function createNewLikeInstance (setYear, setLike) {
    const like = new Like({year : setYear, likes : setLike})

    like.save()
    
    return like
}

export async function incrementLikeInstance (year, set) {
    const like = await getLikeInstance(year)

    // IF NEW YEAR
    if(like.length === 0) {
        const newYear = await createNewLikeInstance(year, 1)

        return newYear

    }else {
        like[0].likes = like[0].likes + set
        const newLikeNumber = await updateLikeInstance(year, like[0].likes)

        return newLikeNumber
    }
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