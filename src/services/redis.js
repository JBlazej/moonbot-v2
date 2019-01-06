/**
 * Redis
 * Test
 */
import Redis from 'ioredis'

const REDIS_URL = process.env.REDIS_URL;
const redis = new Redis(REDIS_URL)

async function main () {
  try{
    await redis.set('cat', 'Charlie')
  } catch (error) {
    console.log(error)
  }
  redis.disconnect()
}

redis.connect(() => console.log('Connected to Redis server'))
redis.subscribe("__keyspace@0__:*")

// main()