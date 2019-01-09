import {getTimeAndDateNow} from './dateAndTime'

export const intro = [
  'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.',
  'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.',
  'Jo a takhle vypadam. :D'
]

export function getStartedPayload(){
  let utc = getTimeAndDateNow()
  const result = [
    'Ahoj já jsem Moonbot.',
    'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + ' a jsem tu od toho abych ti pomáhal.'
  ]

  return result
}

export const introIDOS = [
  'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud a kam.',
  'Například'
]

export const help = [
  'Platné příkazy:',
  'Moonbot',
  'VŠE',
  'Novinky',
  'InSIS',
  'Spojení',
  'Translator',
  'Nastavení',
	'Hackernews',
	'Nápověda'
]

export const googleTranslator = [
  'Dokážu překládat do Angličtiny, Němčiny a Španělštiny.',
  'Zadej příkaz Přelož mezera a tvůj text.'
]

export const googleMore = [
  'Přelož Ahoj jak se máš?'
]

export const loadingTranslator = [
  'Váš text se překládá...'
]

export const loadingIDOS = [
  'Váš spoj se vyhledává...'
]