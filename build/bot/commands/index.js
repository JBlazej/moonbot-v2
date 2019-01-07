'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, utcObject, introTravel, utcObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'spojeni' ? 8 : _context.t0 === 'spojení' ? 8 : _context.t0 === 'vyzkoušet' ? 13 : _context.t0 === 'vyzkouset' ? 13 : _context.t0 === 'spoj' ? 18 : _context.t0 === 'translator' ? 21 : _context.t0 === 'preloz' ? 26 : _context.t0 === 'přelož' ? 26 : _context.t0 === 'vse' ? 29 : _context.t0 === 'vše' ? 29 : _context.t0 === 'ukaz' ? 32 : _context.t0 === 'ukaž' ? 32 : _context.t0 === 'jazyk' ? 37 : _context.t0 === 'prvak' ? 39 : _context.t0 === 'prvák' ? 39 : _context.t0 === 'fakulty' ? 40 : _context.t0 === 'fakulta' ? 40 : _context.t0 === 'koleje' ? 41 : _context.t0 === 'kolej' ? 41 : _context.t0 === 'insis' ? 42 : _context.t0 === 'isis' ? 42 : _context.t0 === 'jb' ? 43 : _context.t0 === 'napoveda' ? 44 : _context.t0 === 'nápověda' ? 44 : 47;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 52);

                              case 8:
                                    _context.next = 10;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.introIDOS);

                              case 10:
                                    _context.next = 12;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_idos_intro']);

                              case 12:
                                    return _context.abrupt('break', 52);

                              case 13:
                                    utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                                    introTravel = 'spoj volha do hlavni nadrazi';
                                    _context.next = 17;
                                    return (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, introTravel, utcObject.utc);

                              case 17:
                                    return _context.abrupt('break', 52);

                              case 18:
                                    utcObj = (0, _dateAndTime.getTimeAndDateNow)();

                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, incomeMessage, utcObj.utc);
                                    return _context.abrupt('break', 52);

                              case 21:
                                    _context.next = 23;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleTranslator);

                              case 23:
                                    _context.next = 25;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_next_translator']);

                              case 25:
                                    return _context.abrupt('break', 52);

                              case 26:
                                    _context.next = 28;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, incomeMessage, formattedMessage[0]);

                              case 28:
                                    return _context.abrupt('break', 52);

                              case 29:
                                    _context.next = 31;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);

                              case 31:
                                    return _context.abrupt('break', 52);

                              case 32:
                                    _context.next = 34;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.googleMore);

                              case 34:
                                    _context.next = 36;
                                    return (0, _google.sendTraslatedMessage)(webhookEvent.sender.id, 'Přelož Ahoj jak se máš?', 'Přelož');

                              case 36:
                                    return _context.abrupt('break', 52);

                              case 37:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_language']);
                                    return _context.abrupt('break', 52);

                              case 39:
                                    return _context.abrupt('break', 52);

                              case 40:
                                    return _context.abrupt('break', 52);

                              case 41:
                                    return _context.abrupt('break', 52);

                              case 42:
                                    return _context.abrupt('break', 52);

                              case 43:
                                    return _context.abrupt('break', 52);

                              case 44:
                                    _context.next = 46;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.help);

                              case 46:
                                    return _context.abrupt('break', 52);

                              case 47:
                                    _context.next = 49;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Tenhle příkaz neznám.');

                              case 49:
                                    _context.next = 51;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_intro']);

                              case 51:
                                    return _context.abrupt('break', 52);

                              case 52:
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map