import { Translate } from '@google-cloud/translate';

import { gooAuth } from '../../conf/google';

import { sendTextMessage, sendMultipleMessages } from '../lib/messages';
import { loadingTranslator } from '../lib/answers';

import { getUserById } from '../../services/user';

export async function sendTraslatedMessage(id, text, command) {
	const textToTranslate = await transformTextForGoogle(text, command);

	if (textToTranslate === false) {
		await sendTextMessage(id, 'Špatně zadán příkaz.');
	} else {
		await sendMultipleMessages(id, loadingTranslator);
		const userLanguage = await getUserById(id);

		await sendTranslatedText(id, textToTranslate, userLanguage[0].language);
	}
}

export async function sendTranslatedText(id, setText, setlanguage) {
	const translate = new Translate({ projectId: gooAuth.project_id, credentials: gooAuth });

	const text = setText;
	const target = setlanguage;

	translate
		.translate(text, target)
		.then((results) => {
			const translation = results[0];

			const result = translation != setText ? translation : 'Text se nepodařilo přeložit.';

			sendTextMessage(id, result);
		})
		.catch((err) => {
			console.error('ERROR:', err);
		});
}

async function transformTextForGoogle(text, command) {
	const onlyText = text.replace(command + ' ', '');

	const result = text.length > 7 ? onlyText : false;

	return result;
}
