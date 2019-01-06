'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, utcObject, introTravel, utcObj, templato;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moonbot' ? 8 : _context.t0 === 'moon' ? 8 : _context.t0 === 'bot' ? 8 : _context.t0 === 'spojeni' ? 13 : _context.t0 === 'spojení' ? 13 : _context.t0 === 'vyzkoušet' ? 18 : _context.t0 === 'vyzkouset' ? 18 : _context.t0 === 'spoj' ? 25 : _context.t0 === 'translator' ? 28 : _context.t0 === 'preloz' ? 33 : _context.t0 === 'přelož' ? 33 : _context.t0 === 'vse' ? 36 : _context.t0 === 'vše' ? 36 : _context.t0 === 'zjistit' ? 39 : _context.t0 === 'ano' ? 44 : _context.t0 === 'ne' ? 49 : _context.t0 === 'nastavení' ? 51 : _context.t0 === 'nastaveni' ? 51 : _context.t0 === 'prvak' ? 53 : _context.t0 === 'prvák' ? 53 : _context.t0 === 'fakulty' ? 54 : _context.t0 === 'fakulta' ? 54 : _context.t0 === 'koleje' ? 55 : _context.t0 === 'kolej' ? 55 : _context.t0 === 'insis' ? 56 : _context.t0 === 'isis' ? 56 : _context.t0 === 'novinky' ? 57 : _context.t0 === 'hackernews' ? 57 : _context.t0 === 'hacker' ? 57 : _context.t0 === 'jb' ? 63 : _context.t0 === 'napoveda' ? 64 : _context.t0 === 'nápověda' ? 64 : 67;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 72);

                              case 8:
                                    _context.next = 10;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, (0, _answers.getMoonbotPayload)());

                              case 10:
                                    _context.next = 12;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_intro']);

                              case 12:
                                    return _context.abrupt('break', 72);

                              case 13:
                                    _context.next = 15;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.introIDOS);

                              case 15:
                                    _context.next = 17;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_idos_intro']);

                              case 17:
                                    return _context.abrupt('break', 72);

                              case 18:
                                    utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                                    introTravel = 'spoj volha do hlavni nadrazi';
                                    _context.next = 22;
                                    return (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, introTravel, utcObject.utc);

                              case 22:
                                    _context.next = 24;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_gif']);

                              case 24:
                                    return _context.abrupt('break', 72);

                              case 25:
                                    utcObj = (0, _dateAndTime.getTimeAndDateNow)();

                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, incomeMessage, utcObj.utc);
                                    return _context.abrupt('break', 72);

                              case 28:
                                    _context.next = 30;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleTranslator);

                              case 30:
                                    _context.next = 32;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_next_translator']);

                              case 32:
                                    return _context.abrupt('break', 72);

                              case 33:
                                    _context.next = 35;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, incomeMessage, formattedMessage[0]);

                              case 35:
                                    return _context.abrupt('break', 72);

                              case 36:
                                    _context.next = 38;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);

                              case 38:
                                    return _context.abrupt('break', 72);

                              case 39:
                                    _context.next = 41;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleIntro);

                              case 41:
                                    _context.next = 43;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_last_translator']);

                              case 43:
                                    return _context.abrupt('break', 72);

                              case 44:
                                    _context.next = 46;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleMore);

                              case 46:
                                    _context.next = 48;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, 'Přelož Ahoj jak se máš?', 'Přelož');

                              case 48:
                                    return _context.abrupt('break', 72);

                              case 49:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Haha');
                                    return _context.abrupt('break', 72);

                              case 51:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_language']);
                                    return _context.abrupt('break', 72);

                              case 53:
                                    return _context.abrupt('break', 72);

                              case 54:
                                    return _context.abrupt('break', 72);

                              case 55:
                                    return _context.abrupt('break', 72);

                              case 56:
                                    return _context.abrupt('break', 72);

                              case 57:
                                    _context.next = 59;
                                    return (0, _hacker.sendHackerIntro)(webhookEvent.sender.id);

                              case 59:
                                    templato = _context.sent;
                                    _context.next = 62;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, templato);

                              case 62:
                                    return _context.abrupt('break', 72);

                              case 63:
                                    return _context.abrupt('break', 72);

                              case 64:
                                    _context.next = 66;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.help);

                              case 66:
                                    return _context.abrupt('break', 72);

                              case 67:
                                    _context.next = 69;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Tenhle příkaz neznám... promiň :-(');

                              case 69:
                                    _context.next = 71;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_quick_help']);

                              case 71:
                                    return _context.abrupt('break', 72);

                              case 72:
                              case 'end':
                                    return _context.stop();
                        }
                  }
            }, _callee, this);
      }));

      return function commands(_x) {
            return _ref.apply(this, arguments);
      };
}();

var _messages = require('../lib/messages');

var _dateAndTime = require('../lib/dateAndTime');

var _idos = require('../idos');

var _answers = require('../lib/answers');

var _templates = require('../lib/templates');

var _hacker = require('../hacker');

var _google = require('../google');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map