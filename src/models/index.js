import mongoose from 'mongoose'

let db

function getMongoUrl () {
  const url = 'ds131983.mlab.com:31983/heroku_ph19r4wb'
  const user = 'swagger'
  const pass = 'abc1234567'

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

