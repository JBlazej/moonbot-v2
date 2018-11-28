import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;

export default class RedisRepo {
    constructor() {
      this.redis = new Redis(REDIS_URL);
      this.redis.on("ready", () => {
        this.redis.config("SET", "notify-keyspace-events", "Ex");
      });
    }
    get(key) {
      return this.redis.get(key);
    }
    setReminder(key, value, expire) {
      this.redis
        .multi()
        .set(key, value)
        .set(`reminder:${key}`, 1)
        .expire(`reminder:${key}`, expire)
        .exec();
    }
  }