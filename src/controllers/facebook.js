import { botMessengerMiddleware } from '../bot/middleware';
import { VERIFY_TOKEN } from '../conf/graph';

export async function facebookVerificationHook(req, res) {
	// Your verify token. Should be a random string.
	let VERIFY_TOKEN_SET = VERIFY_TOKEN;

	// Parse the query params
	let mode = req.query['hub.mode'];
	let token = req.query['hub.verify_token'];
	let challenge = req.query['hub.challenge'];

	// Checks if a token and mode is in the query string of the request
	if (mode && token) {
		if (mode === 'subscribe' && token === VERIFY_TOKEN_SET) {
			res.status(200).send(challenge);
		} else {
			res.sendStatus(403);
		}
	}
}

export async function facebookEventHook(req, res) {
	let body = req.body;

	if (body.object === 'page') {
		// Iterates over each entry - there may be multiple if batched
		body.entry.forEach((entry) => {
			entry.messaging.forEach((event) => {
				console.log(event);
				botMessengerMiddleware(event);
			});
			res.status(200).send('EVENT_RECEIVED');
		});
	} else {
		res.sendStatus(404);
	}
}
