import mongoose from 'mongoose'
import {getDB} from '..'

// USERS SCHEMA
// -----------------------------------------------------------------------------
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  station: {
      from: {
          type: String,
          default: 'volha'
      },
      to: {
          type: String,
          default: 'husinecka'
      },
      time: {
          type: Date,
          default: Date.now
      }
  },
  hacker: {
      type: Boolean,
      default: false
  }
})

export async function getUserAll () {
    const user = await getDB().model('User', UserSchema).find({})
    console.log(user)
    
    return user
}



export async function createNewUser (id) {
    const User = await getDB().model('User', UserSchema)
    console.log(User)
    const user = new User({id: id})
    user.save()
    console.log(user)
    return user
  
}