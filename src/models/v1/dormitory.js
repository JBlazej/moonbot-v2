import mongoose from 'mongoose'
import {getDB} from '..'

// LIKES SCHEMA
// -----------------------------------------------------------------------------
const DormitorySchema = new mongoose.Schema({
  id: {
    type: Number
  },
  title: {
      type: String
  },
  contact: {
      head: {
          name: {
              type: String
          },
          email: {
              type: String
          },
          phone: {
              type: String
          }
      },
      representative: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
      }
  },
  adressURL: {
      type: String
  }
})

export const Dormitory = mongoose.model('Dormitory', DormitorySchema)