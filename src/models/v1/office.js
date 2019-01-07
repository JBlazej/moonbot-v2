import mongoose from 'mongoose'
import {getDB} from '..'

// LIKES SCHEMA
// -----------------------------------------------------------------------------
const OfficeSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  monday: {
      type: String
  },
  tuesday: {
      type: String
  },
  wednesday: {
      type: String
  },
  thursday: {
      type: String
  },
  friday: {
      type: String
  }
})

export const Office = mongoose.model('Office', OfficeSchema)