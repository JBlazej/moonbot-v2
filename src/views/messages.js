import {getTime, getDate} from '../bot/lib/dateAndTime'

export const intro = [
  'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.',
  'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.',
  'Jo a takhle vypadam. :D'
]

let date = new Date()
let gTime = getTime(date)

export const starter = [
  'Ahoj já jsem Moonbot.',
  'Dnes je ' + gTime,
  '🌚',
  'A jsem zde od toho, abych tě mohl informovat o novinkách ze školy.',
  'Navíc ti dokážu rychle najít cestu kam zrovna potřebuješ.'
  
]

console.log(starter)

export const introIDOS = [
  'Využívám služby IDOS, která poskytuje informace o spojení MHD v Praze.',
  'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud kam.',
  'Přesně v tomto tvaru: ',
  'Spoj Volha do Hlavní nádraží'
]

export const help = [
	'Platné příkazy: ',
	'Koleje',
	'Prvák',
	'Hackernews',
	'Napoveda',
	'VSE',
	'InSIS',
  'Fakulty',
  'Spojení'
]