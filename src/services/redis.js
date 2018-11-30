/**
 * Redis
 * Test
 */
import redis from 'redis'

const REDIS_URL = process.env.REDIS_URL;
//const client = redis.createClient(REDIS_URL);

const client = redis.createClient(REDIS_URL)

client.on("error", function (err) {
  console.log("Error " + err);
});

client.on("connect", runSample);

function runSample() {

  console.log(client)
    client.set('string key', 'Hello World', redis.print);

    client.expire('string key', 3000);
 
    var myTimer = setInterval(function() {
        client.get('string key', function (err, reply) {
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