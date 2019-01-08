import mongoose from 'mongoose'
import {getDB} from '..'

// LIKES SCHEMA
// -----------------------------------------------------------------------------
const OfficeSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  college:  {
      type: String
  },
  nameOfDay: {
      type: String
  },
  opening: {
      type: String
  }
})

export const Office = mongoose.model('Office', OfficeSchema)