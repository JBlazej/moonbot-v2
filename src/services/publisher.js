import Redis from 'ioredis'

const pub = new Redis(process.env.REDIS_URL)

const channel = 'garageDoor';

const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

async function main() {
    console.log('Started garage door publisher...')
    // Sleep 4 seconds and then publish garage door "opened" event.
    await sleep(4);
    pub.publish(channel, 'opened');
    await sleep(4);
    pub.publish(channel, 'closed');

}

main();