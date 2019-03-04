import { getTimeAndDateNow } from './dateAndTime';

// Starting intro
export function getStartedPayload() {
	let utc = getTimeAndDateNow();
	const result = [
		'Ahoj já jsem Moonbot.',
		'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + ' a jsem tu od toho abych ti pomáhal.'
	];

	return result;
}

// IDOS
export const idosIntro = [ 'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud a kam.', 'Například' ];

export const idosLoading = [ 'Váš spoj se vyhledává...' ];

export const idosError = [ 'Špatný název zastávky.', 'Příkaz je ve tvaru: Spoj odkud do kam' ];

// Google translator
export const googleTranslatorIntro = [
	'Dokážu překládat do Angličtiny, Němčiny a Španělštiny.',
	'Zadej příkaz Přelož mezera a tvůj text.'
];

export const googleTranslatorMore = [ 'Přelož Ahoj jak se máš?' ];

export const googleTranslatorLoading = [ 'Váš text se překládá...' ];

// Help
export const help = [ 'Platné příkazy:', 'VŠE', 'Fakutly', 'Koleje', 'Novinky', 'Spojení', 'Translator', 'Nápověda' ];

// Default
export const defaultError = [ 'Tenhle příkaz neznám.' ];
