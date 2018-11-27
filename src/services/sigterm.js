import cron from 'node-cron'
import request from 'request'

export async function sigterm () {
  cron.schedule('*/1 * * * *', () => {
    request('https://moonbot-v2.herokuapp.com')
  })
}