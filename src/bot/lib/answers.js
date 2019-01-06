import {getTimeAndDateNow} from './dateAndTime'

export const intro = [
  'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.',
  'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.',
  'Jo a takhle vypadam. :D'
]

export function getStartedPayload(){
  let utc = getTimeAndDateNow()
  console.log(utc.time)
  const result = [
    'Ahoj já jsem Moonbot.',
    'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + ' a jsem tu od toho abych ti pomáhal.'
  ]

  return result
}

export const introIDOS = [
  'Využívám služby IDOS, která poskytuje informace o spojení MHD v Praze.',
  'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud a kam.',
  '👩🏼‍🚀 🚀 ',
  'Přesně v tomto tvaru: ',
  'Spoj Volha do Hlavní nádraží'
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
  'Využívám Google Translator abych ti mohl pomoct s překladem textu.',
  'Dokážu překládat do Angličtiny, Němčiny a Španělštiny.'
]

export const googleIntro = [
  'Můžeš přeložit libovolný text.',
  'Jazyk překladu změníš příkazem Nastavení.'
]

export const googleMore = [
  'Příkaz je následující:',
  'Přelož Ahoj jak se máš?'
]

export const loadingTranslator = [
  '👩🏻‍🚀 ',
  'Váš text se překládá...'
]

export const loadingIDOS = [
  '👩🏻‍🚀 ',
  'Váš text se překládá...'
]

export const vseInfo = [
  'Neco'
]