//redis.subscribe("__keyevent@0__:expired")
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

redis.subscribe( "__keyevent@0__:", function (err) {
    console.log(err)
});

redis.on('message', (pattern,channel, msg) => {
    console.log( "S2: received on "+channel+" event "+msg )
});

function start () {
    redis.set('cat', 'Garfield');
    redis.expire('cat', 8)
    
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