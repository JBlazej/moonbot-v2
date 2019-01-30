'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, utcObject, introTravel, utcObj, utcDay, param;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'spojeni' ? 6 : _context.t0 === 'spojení' ? 6 : _context.t0 === 'vyzkoušet' ? 11 : _context.t0 === 'vyzkouset' ? 11 : _context.t0 === 'spoj' ? 16 : _context.t0 === 'translator' ? 19 : _context.t0 === 'preloz' ? 24 : _context.t0 === 'přelož' ? 24 : _context.t0 === 'vse' ? 27 : _context.t0 === 'vše' ? 27 : _context.t0 === 'ukaz' ? 30 : _context.t0 === 'ukaž' ? 30 : _context.t0 === 'jazyk' ? 35 : _context.t0 === '▼' ? 37 : _context.t0 === 'prvak' ? 44 : _context.t0 === 'prvák' ? 44 : _context.t0 === 'fakulty' ? 45 : _context.t0 === 'fakulta' ? 45 : _context.t0 === 'koleje' ? 46 : _context.t0 === 'kolej' ? 46 : _context.t0 === 'insis' ? 47 : _context.t0 === 'isis' ? 47 : _context.t0 === 'jb' ? 48 : _context.t0 === 'napoveda' ? 49 : _context.t0 === 'nápověda' ? 49 : 52;
                                    break;

                              case 6:
                                    _context.next = 8;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.introIDOS);

                              case 8:
                                    _context.next = 10;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_idos_intro']);

                              case 10:
                                    return _context.abrupt('break', 57);

                              case 11:
                                    utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                                    introTravel = 'spoj volha do hlavni nadrazi';
                                    _context.next = 15;
                                    return (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, introTravel, utcObject.utc);

                              case 15:
                                    return _context.abrupt('break', 57);

                              case 16:
                                    utcObj = (0, _dateAndTime.getTimeAndDateNow)();

                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, incomeMessage, utcObj.utc);
                                    return _context.abrupt('break', 57);

                              case 19:
                                    _context.next = 21;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleTranslator);

                              case 21:
                                    _context.next = 23;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_next_translator']);

                              case 23:
                                    return _context.abrupt('break', 57);

                              case 24:
                                    _context.next = 26;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, incomeMessage, formattedMessage[0]);

                              case 26:
                                    return _context.abrupt('break', 57);

                              case 27:
                                    _context.next = 29;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);

                              case 29:
                                    return _context.abrupt('break', 57);

                              case 30:
                                    _context.next = 32;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleMore);

                              case 32:
                                    _context.next = 34;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, 'Přelož Ahoj jak se máš?', 'Přelož');

                              case 34:
                                    return _context.abrupt('break', 57);

                              case 35:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_language']);
                                    return _context.abrupt('break', 57);

                              case 37:
                                    utcDay = (0, _dateAndTime.getTimeAndDateNow)();
                                    _context.next = 40;
                                    return (0, _user.getUserById)(webhookEvent.sender.id);

                              case 40:
                                    param = _context.sent;
                                    _context.next = 43;
                                    return (0, _vse.sendNextOfficeHours)(webhookEvent.sender.id, utcDay.day, param[0].college);

                              case 43:
                                    return _context.abrupt('break', 57);

                              case 44:
                                    return _context.abrupt('break', 57);

                              case 45:
                                    return _context.abrupt('break', 57);

                              case 46:
                                    return _context.abrupt('break', 57);

                              case 47:
                                    return _context.abrupt('break', 57);

                              case 48:
                                    return _context.abrupt('break', 57);

                              case 49:
                                    _context.next = 51;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.help);

                              case 51:
                                    return _context.abrupt('break', 57);

                              case 52:
                                    _context.next = 54;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Tenhle příkaz neznám.');

                              case 54:
                                    _context.next = 56;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_intro']);

                              case 56:
                                    return _context.abrupt('break', 57);

                              case 57:
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

var _google = require('../google');

var _vse = require('../vse');

var _user = require('../../services/user');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map