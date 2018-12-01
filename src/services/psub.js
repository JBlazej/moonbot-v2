//redis.subscribe("__keyevent@0__:expired")
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

const channel = 'kokos';

redis.subscribe( channel, (error, count) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Počet ${count} channel. Posloucham na ${channel} channel.`);
});

redis.on('message', (channel, message) => {
    console.log("S2: received on " + channel + " event " + message )
});

function start () {
    redis.set(channel, 'Garfield', 'ex', 10);

    redis.get(chennel).then((err, result) => {
        if(err){
            console.log(err)
        }else {
            console.log(result)
        }  
    })
}

start()