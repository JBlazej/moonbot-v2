import mongoose from 'mongoose'
import {getDB} from '..'

// LIKES SCHEMA
// -----------------------------------------------------------------------------
const LikeSchema = new mongoose.Schema({
  year: {
    type: Number
  },
  likes: {
      type: Number
  }
})

export const Like = mongoose.model('Like', LikeSchema)