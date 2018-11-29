/**
 * Redis
 * Test
 */
import redis from 'redis'
import RedisNotifier from 'redis-notifier'

const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);



var eventNotifier = new RedisNotifier(redis, {
    redis : { host : 'ec2-63-32-66-219.eu-west-1.compute.amazonaws.com', port : 37959 },
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
        break;
      case "evicted":
        console.info(`Evicted Key ${key}`);        
        break;
      default:
        logger.debug("Unrecognized Channel Type:" + channel.type);
    }
  });
  