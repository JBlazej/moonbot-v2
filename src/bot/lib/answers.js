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
    'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + '.'
  ]

  return result
}

export function getMoonbotPayload(){
  let utc = getTimeAndDateNow()

  const result = [
    'Dne ' + utc.date + ' si mě oživil.',
    'Za to jsem ti velice zavázan.',
    'Za to ti pomůžu s vyhledat spojení, když se někam budeš chtít dostat.',
    'Dotoho si u mě můžeš nastavit odběr novinek ze světa Vysoké školy ekonomické.'
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

export const loading = [
  '👩🏻‍🚀 ',
  'Váš text se překládá...'
]

export const vseInfo = [
  'Neco'
]