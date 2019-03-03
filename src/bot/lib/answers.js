import { getTimeAndDateNow } from './dateAndTime';

export function getStartedPayload() {
	let utc = getTimeAndDateNow();
	const result = [
		'Ahoj já jsem Moonbot.',
		'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + ' a jsem tu od toho abych ti pomáhal.'
	];

	return result;
}

export const introIDOS = [ 'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud a kam.', 'Například' ];

export const help = [
	'Platné příkazy:',
	'VŠE',
	'Fakutly',
	'Koleje',
	'Novinky',
	'Spojení',
	'Translator',
	'Nastavení',
	'Nápověda'
];

export const googleTranslator = [
	'Dokážu překládat do Angličtiny, Němčiny a Španělštiny.',
	'Zadej příkaz Přelož mezera a tvůj text.'
];

export const googleMore = [ 'Přelož Ahoj jak se máš?' ];

export const loadingTranslator = [ 'Váš text se překládá...' ];

export const loadingIDOS = [ 'Váš spoj se vyhledává...' ];

export const errorIDOS = [ 'Špatný název zastávky.', 'Příkaz je ve tvaru: Spoj odkud do kam' ];
