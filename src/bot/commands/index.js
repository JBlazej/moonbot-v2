import { sendMultipleMessages, sendGenMessage } from '../lib/messages';
import { getTimeAndDateNow } from '../lib/dateAndTime';
import { introIDOS, help, googleTranslator, googleMore } from '../lib/answers';
import { templates } from '../lib/templates';
import { sendDefaultAnswer } from '../lib/default';

import { sendIdosAnswer } from '../idos';
import { sendTraslatedMessage } from '../google';
import { sendNextOfficeHours, sendVSETemplate } from '../vse';
import { sendQuickNews } from '../news';

import { getUserById } from '../../services/user';

export async function commands(event) {
	let sender = event.sender.id;

	let incomeMessage = event.message.text.toLowerCase().trim();
	let formattedMessage = incomeMessage.toString().split(' ');

	switch (formattedMessage[0]) {
		case 'spojeni':
		case 'spojení':
			await sendMultipleMessages(sender, introIDOS);
			await sendGenMessage(sender, templates['send_idos_intro']);
			break;

		case 'vyzkoušet':
		case 'vyzkouset':
			const utcObject = getTimeAndDateNow();
			const introTravel = 'spoj volha do hlavni nadrazi';
			await sendIdosAnswer(sender, introTravel, utcObject.utc);
			break;

		case 'spoj':
			const utcObj = getTimeAndDateNow();
			sendIdosAnswer(sender, incomeMessage, utcObj);
			break;

		case 'translator':
			await sendMultipleMessages(sender, googleTranslator);
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
			await sendMultipleMessages(sender, googleMore);
			await sendTraslatedMessage(sender, 'Přelož Ahoj jak se máš?', 'Přelož');
			break;

		case 'jazyk':
			sendGenMessage(sender, templates['get_language']);
			break;

		case '▼':
			const utcDay = getTimeAndDateNow();
			const param = await getUserById(sender);
			await sendNextOfficeHours(sender, utcDay.day, param[0].college);
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
