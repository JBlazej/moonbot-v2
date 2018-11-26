import mongoose from 'mongoose'
const supportedLanguages =['en', 'cs', 'de', 'es']
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
  },
  language: {
    type: String,
    enum: supportedLanguages,
    default: 'en'
}
})

export const User = mongoose.model('User', UserSchema)