import Redis from "ioredis";
const REDIS_URL = process.env.REDIS_URL;

const subscriber = new Redis(REDIS_URL);
const publisher = new Redis(REDIS_URL);

export default new class PubSub {
  publish(channel, message) {
    publisher.publish(channel, message);
  }
  subscribe(channel) {
    subscriber.subscribe(channel);
  }
  on(event, callback) {
    subscriber.on(event, (channel, message) => {
      callback(channel, message);
    });
  }
}();