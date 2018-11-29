/**
 * Redis
 * Test
 */
import redis from 'redis'
import RedisNotifier from 'redis-notifier'

const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

client.on('connect', runSample)

client.on('error', err => {
    console.log(`Error: ${err}`);
})

function runSample() {
    // Set a value
    client.set('string key', 'Hello World', redis.print);
    // Expire in 3 seconds
    client.expire('string key', 3);
 
    // This timer is only to demo the TTL
    // Runs every second until the timeout
    // occurs on the value
    var myTimer = setInterval(function() {
        client.get('string key', function (err, reply) {
            if(reply) {
                console.log('I live: ' + reply.toString());
                client.ttl('string key', writeTTL);
            } else {
                clearTimeout(myTimer);
                console.log('I expired');
                client.quit();
            }
        });
    }, 1000);
}
 
function writeTTL(err, data) {
    console.log('I live for this long yet: ' + data);
    
}

var eventNotifier = new RedisNotifier(client, {
    redis : REDIS_URL,
    expired : true,
    evicted : true,
    logLevel : 'DEBUG' //Defaults To INFO
});
  
  //Listen for event emission
  eventNotifier.on('message', function(pattern, channelPattern, emittedKey) {
    var channel = this.parseMessageChannel(channelPattern);
    switch(channel.key) {
      case 'expired':
        console.info(`Expired Key ${key}`);
        console.log('expired jak cyp')
        break;
      case "evicted":
        console.info(`Evicted Key ${key}`);        
        break;
      default:
        logger.debug("Unrecognized Channel Type:" + channel.type);
    }
  });