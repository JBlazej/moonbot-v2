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

    return user
}

export async function getUserById (id) {
    const user = await getDB().model('User', UserSchema).find({"id": id})
    
    return user
  }

export async function modifyUserById (id, from, to, utcTimeAndDate) {
    let data = {
        station: {
            from: from,
            to: to,
            time: utcTimeAndDate
        }
    }

    const user = await getDB().model('User', UserSchema).findOneAndUpdate({id: id}, data, {new: true})
    
    return user
}

export async function updateUserById (id) {
    let data = {
        id: id
    }

    const user = await getDB().model('User', UserSchema).findOneAndUpdate({id: id}, data, {new: true})
    
    return user
}

export async function createNewUser (id) {
    const User = await getDB().model('User', UserSchema)
    const user = new User({id: id})

    const help = await getUserById(id)
    console.log(help.length)

    if(help.length === 0) {
        user.save()
        return user
    } else {
        console.log('Existuje a updatne se')
        updateUserById(id)
    }
}