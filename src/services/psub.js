//redis.subscribe("__keyevent@0__:expired")
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

const channel = '__keyevent@0__:*';

redis.subscribe( "__keyevent@0__:*", (error, count) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Počet ${count} channel. Posloucham na ${channel} channel.`);
});

redis.on('message', (channel, message) => {
    console.log("S2: received on " + channel + " event " + message )
});

function start () {
    redis.set('cat', 'Garfield', 'ex', 10);
    
    var myTimer = setInterval(function() {
    redis.get('cat', function (err, reply) {
        if(reply) {
            console.log('I live: ' + reply.toString());
        } else {
            clearTimeout(myTimer);
            console.log('I expired');
            
        }
    });
    }, 1000);
}

start()