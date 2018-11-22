import cron from 'node-cron'
import request from 'request'

export async function sigterm () {
  cron.schedule('*/10 * * * *', () => {
    request('https://moonbot-v3.herokuapp.com', { json: false }, (err, res) => {
      if (err) { return console.log(err) }
      console.log('Ping and now you will not died!!')
    })
  })
}
