import {getTimeAndDateNow} from './dateAndTime'

export const intro = [
  'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.',
  'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.',
  'Jo a takhle vypadam. :D'
]

export function getStartedPayload(){
  let utc = getTimeAndDateNow()
  console.log(utc.time)
  const starter = [
    'Ahoj já jsem Moonbot.',
    'Dnes je ' + utc.time + ' hodin ' + utc.set.partOfDay + '.'
  ]
  console.log(starter)
  return starter
}


export const info = [
  'A jsem zde od toho, abych tě mohl informovat o novinkách ze školy.',
  'Navíc ti dokážu rychle najít cestu kam zrovna potřebuješ.'
]

export const introIDOS = [
  'Využívám služby IDOS, která poskytuje informace o spojení MHD v Praze.',
  'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud a kam.',
  '👩🏼‍🚀 🚀 ',
  'Přesně v tomto tvaru: ',
  'Spoj Volha do Hlavní nádraží'
]

export const help = [
	'Platné příkazy:',
	'Koleje',
	'Prvák',
	'Hackernews',
	'Nápověda',
	'VSE',
	'InSIS',
  'Fakulty',
  'Spojení'
]