import cron from 'node-cron';
import request from 'request';

export async function sigtermBE() {
	cron.schedule('*/10 * * * *', () => {
		request('https://moonbot-v2.herokuapp.com');
	});
}

export async function sigtermFE() {
	cron.schedule('*/10 * * * *', () => {
		request('https://moonbot-v2-front.herokuapp.com');
	});
}
