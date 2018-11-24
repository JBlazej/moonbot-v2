import mongoose from 'mongoose'
import {DB_URL, DB_USER, DB_PASSWORD} from '../conf/db'

let db

function getMongoUrl () {
  const url = DB_URL
  const user = DB_USER
  const pass = DB_PASSWORD

  return `mongodb://${user}:${pass}@${url}`
}

export async function connectDB () {
  const url = getMongoUrl()
  try{
    db = await mongoose.connect(url, { useNewUrlParser: true })
    console.log('DB connection OK')
  } catch(error){
    console.log(error)
  }
}

export function getDB () {
  if (!db) throw new Error(500, 'Database connection error')
  return db
}

export async function closeDBconnection () {
  if (!db) return
  await db.close(true)
}

