'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = exports.introIDOS = exports.starter = exports.intro = undefined;

var _dateAndTime = require('../bot/lib/dateAndTime');

var intro = exports.intro = ['Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.', 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.', 'Jo a takhle vypadam. :D'];
var date = new Date();
var gTime = (0, _dateAndTime.getTime)(date);
var gDate = (0, _dateAndTime.getDate)(date);

var starter = exports.starter = ['Ahoj já jsem Moonbot.', gTime + ' ' + gDate, '🌚', 'Jsem zde od toho, abych tě mohl informovat o novinkách ze školy.', 'Navíc ti dokážu rychle najít cestu kam zrovna potřebuješ.'];

console.log(starter);

var introIDOS = exports.introIDOS = ['Využívám služby IDOS, která poskytuje informace o spojení MHD v Praze.', 'Pro vyhledávání zadej příkaz Spoj a zadej názvy zastávek odkud kam.', 'Přesně v tomto tvaru: ', 'Spoj Volha do Hlavní nádraží'];

var help = exports.help = ['Platné příkazy: ', 'Koleje', 'Prvák', 'Hackernews', 'Napoveda', 'VSE', 'InSIS', 'Fakulty', 'Spojení'];
//# sourceMappingURL=messages.js.map