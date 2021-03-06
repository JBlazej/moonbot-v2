import request from 'request-promise';
import { GRAPH_URL_MESSAGES, PAGE_ACCESS_TOKEN } from '../../conf/graph';

export async function makeRequest(options) {
	return request(options);
}

export async function sendTextMessage(sender, text) {
	let options = {
		url: GRAPH_URL_MESSAGES,
		qs: { access_token: PAGE_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: sender },
			message: { text: text }
		}
	};

	return makeRequest(options);
}

export async function sendGenMessage(sender, message) {
	var options = {
		url: GRAPH_URL_MESSAGES,
		qs: { access_token: PAGE_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: sender },
			message: message
		}
	};

	return makeRequest(options);
}

export async function sendMultipleMessages(id, object) {
	let obj = object;

	for (const item of obj) {
		await sendTextMessage(id, item);
	}
}
