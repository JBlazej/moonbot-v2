import { templates } from '../lib/templates';
import { sendMultipleMessages, sendGenMessage } from '../lib/messages';
import { defaultError } from '../lib/answers';

import { getUserById, setCount } from '../../services/user';

export async function sendDefaultAnswer(sender) {
	let user = await getUserById(sender);
	let offset = user[0].count + 1;

	if (user[0].count < 2) {
		await sendMultipleMessages(sender, defaultError);
		await sendGenMessage(sender, templates['send_intro']);

		await setCount(sender, offset);
	} else {
		await sendMultipleMessages(sender, defaultError);
		await sendGenMessage(sender, templates['get_help']);

		await setCount(sender, 0);
	}
}
