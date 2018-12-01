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

redis.subscribe("__keyevent@0__:expired")

redis.on('pmessage', function(pattern,channel, msg) {
    console.log( "S2: received on "+channel+" event "+msg )
});
redis.psubscribe( "__keyspace@0__:*", function (err) {
    console.log(err)
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
            client.quit();
        }
    });
    }, 1000);
}

start()