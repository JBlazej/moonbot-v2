import mongoose from 'mongoose'

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

export const User = mongoose.model('User', UserSchema)