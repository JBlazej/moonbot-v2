import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

redis.on('message', (channel, message) => {
    console.log(`Received the following message from ${channel}: ${message}`);
});

const channel = 'garageDoor';

redis.subscribe(channel, (error, count) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Subscribed to ${count} channel. Listening for updates on the ${channel} channel.`);
});