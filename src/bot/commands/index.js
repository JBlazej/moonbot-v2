import { sendMultipleMessages, sendGenMessage } from '../lib/messages';
import { getTimeAndDateNow } from '../lib/dateAndTime';
import { idosIntro, googleTranslatorIntro, googleTranslatorMore, help } from '../lib/answers';
import { templates } from '../lib/templates';
import { sendDefaultAnswer } from '../lib/default';

import { sendIdosAnswer } from '../idos';
import { sendTraslatedMessage } from '../google';
import { sendNextOfficeHours, sendVSETemplate } from '../vse';
import { sendQuickNews } from '../news';

export async function commands(event) {
	let sender = event.sender.id;
	let utcObject = getTimeAndDateNow();

	let incomeMessage = event.message.text.toLowerCase().trim();
	let formattedMessage = incomeMessage.toString().split(' ');
	console.log(formattedMessage);
	console.log(formattedMessage);

	switch (formattedMessage[0]) {
		case 'spojeni':
		case 'spojení':
			await sendMultipleMessages(sender, idosIntro);
			await sendGenMessage(sender, templates['send_idos_intro']);
			break;

		case 'vyzkoušet':
		case 'vyzkouset':
			await sendIdosAnswer(sender, 'spoj volha do hlavni nadrazi', utcObject);
			break;

		case 'spoj':
			sendIdosAnswer(sender, incomeMessage, utcObject);
			break;

		case 'translator':
			await sendMultipleMessages(sender, googleTranslatorIntro);
			await sendGenMessage(sender, templates['send_next_translator']);
			break;

		case 'preloz':
		case 'přelož':
			await sendTraslatedMessage(sender, incomeMessage, formattedMessage[0]);
			break;

		case 'vse':
		case 'vše':
			sendVSETemplate(sender);
			break;

		case 'ukaz':
		case 'ukaž':
			await sendMultipleMessages(sender, googleTranslatorMore);
			await sendTraslatedMessage(sender, 'Přelož Ahoj jak se máš?', 'Přelož');
			break;

		case 'jazyk':
			sendGenMessage(sender, templates['get_language']);
			break;

		case '▼':
			await sendNextOfficeHours(sender, utcObject.day);
			break;

		case 'fakulty':
		case 'fakulta':
			sendGenMessage(sender, templates['get_faculties']);
			break;

		case 'koleje':
		case 'kolej':
			sendGenMessage(sender, templates['get_dormitories']);
			break;

		case 'novinky':
			sendQuickNews(sender, incomeMessage);
			break;

		case 'napoveda':
		case 'nápověda':
			await sendMultipleMessages(sender, help);
			break;

		default:
			await sendDefaultAnswer(sender);
			break;
	}
}
