import mongoose from 'mongoose'

let db

function getMongoUrl () {
  const url = 'ds133627.mlab.com:33627/heroku_bxvsts37'
  const user = 'swagger'
  const pass = 'abc1234567'

  return `mongodb://${user}:${pass}@${url}`
}

export async function connectDB () {
  const url = getMongoUrl()
  try{
    db = await mongoose.connect(url, { useNewUrlParser: true })
    console.log('  DB connection OK')
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

