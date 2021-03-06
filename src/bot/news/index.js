import request from 'request';
import { parseString } from 'xml2js';

import { sendGenMessage, sendMultipleMessages } from '../lib/messages';
import { vseNewsNoMoreArticle, vseNewsError } from '../lib/answers';

import { getUserById } from '../../services/user';

export async function sendTitle(id, off, url) {
	const param = url;
	const offset = off;

	// Z API CHODÍ 10 ČLÁNKŮ
	if (offset < 10) {
		const url =
			param === 'vse' || param === 'vše'
				? 'https://vse.cz/archiv/aktuality?feed=rss'
				: 'https://' + param + '.vse.cz/archiv/aktuality?feed=rss';

		request(url, (error, response, body) => {
			const xml = body.toString();

			parseString(xml, (err, result) => {
				const title = result.rss.channel[0].item[offset].title.toString();

				const offsetToNumber = parseInt(offset, 10);
				const newOffset = offsetToNumber + 1;

				let message = {
					attachment: {
						type: 'template',
						payload: {
							template_type: 'button',
							text: title,
							buttons: [
								{
									type: 'postback',
									title: 'Popis',
									payload: 'article-' + offset + '-' + param
								},
								{
									type: 'postback',
									title: 'Další článek',
									payload: 'next-' + newOffset + '-' + param
								}
							]
						}
					}
				};
				sendGenMessage(id, message);
			});
		});
	} else {
		sendMultipleMessages(id, vseNewsNoMoreArticle);
	}
}

export async function sendDescription(id, off, par) {
	const param = par;
	const offset = off;

	const url =
		param === 'vse'
			? 'https://vse.cz/archiv/aktuality?feed=rss'
			: 'https://' + param + '.vse.cz/archiv/aktuality?feed=rss';

	request(url, (error, response, body) => {
		const xml = body.toString();

		parseString(xml, (err, result) => {
			const link = result.rss.channel[0].item[offset].link.toString();

			const description = result.rss.channel[0].item[offset].description.toString();
			const modDescription = description.replace('[&#8230;]', '...');

			const offsetToNumber = parseInt(offset, 10);
			const newOffset = offsetToNumber + 1;

			let message = {
				attachment: {
					type: 'template',
					payload: {
						template_type: 'button',
						text: modDescription,
						buttons: [
							{
								type: 'web_url',
								title: 'Odkaz na článek',
								url: link
							},
							{
								type: 'postback',
								title: 'Další článek',
								payload: 'next-' + newOffset + '-' + param
							}
						]
					}
				}
			};

			sendGenMessage(id, message);
		});
	});
}

export async function sendQuickNews(id, message) {
	let incomeNews = message.toLowerCase().trim();
	let formattedNews = incomeNews.toString().split(' ');

	if (formattedNews.length === 1) {
		const user = await getUserById(id);
		const param = user[0].facultie;

		await sendTitle(id, 0, param);
	} else {
		const supportedURL = [ 'vše', 'vse', 'ffu', 'fmv', 'fph', 'fis', 'nf', 'fm' ];

		if (supportedURL.indexOf(formattedNews[1]) === -1) {
			sendMultipleMessages(id, vseNewsError);
		} else {
			await sendTitle(id, 0, formattedNews[1]);
		}
	}
}
