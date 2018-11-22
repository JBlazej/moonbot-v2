import mongoose from 'mongoose'
import {getDB} from '..'

// LIKES SCHEMA
// -----------------------------------------------------------------------------
const LikeSchema = new mongoose.Schema({
  likes: {
      type: Number
  }
})