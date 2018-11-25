'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, introTravel, templato;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moonbot' ? 8 : _context.t0 === 'moon' ? 8 : _context.t0 === 'bot' ? 8 : _context.t0 === 'spojeni' ? 13 : _context.t0 === 'spojení' ? 13 : _context.t0 === 'vyzkoušet' ? 18 : _context.t0 === 'vyzkouset' ? 18 : _context.t0 === 'spoj' ? 24 : _context.t0 === 'vse' ? 27 : _context.t0 === 'vše' ? 27 : _context.t0 === 'prvak' ? 30 : _context.t0 === 'prvák' ? 30 : _context.t0 === 'fakulty' ? 31 : _context.t0 === 'fakulta' ? 31 : _context.t0 === 'koleje' ? 32 : _context.t0 === 'kolej' ? 32 : _context.t0 === 'insis' ? 33 : _context.t0 === 'isis' ? 33 : _context.t0 === 'hackernews' ? 34 : _context.t0 === 'jb' ? 41 : _context.t0 === 'napoveda' ? 42 : _context.t0 === 'nápověda' ? 42 : 45;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 50);

                              case 8:
                                    _context.next = 10;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.info);

                              case 10:
                                    _context.next = 12;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_intro']);

                              case 12:
                                    return _context.abrupt('break', 50);

                              case 13:
                                    _context.next = 15;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.introIDOS);

                              case 15:
                                    _context.next = 17;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_idos_intro']);

                              case 17:
                                    return _context.abrupt('break', 50);

                              case 18:
                                    introTravel = 'spoj volha do hlavni nadrazi';
                                    _context.next = 21;
                                    return (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, introTravel, utcObject.utc);

                              case 21:
                                    _context.next = 23;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_gif']);

                              case 23:
                                    return _context.abrupt('break', 50);

                              case 24:
                                    console.log(utcObject.utc);
                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, incomeMessage, utcObject.utc);
                                    return _context.abrupt('break', 50);

                              case 27:
                                    _context.next = 29;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);

                              case 29:
                                    return _context.abrupt('break', 50);

                              case 30:
                                    return _context.abrupt('break', 50);

                              case 31:
                                    return _context.abrupt('break', 50);

                              case 32:
                                    return _context.abrupt('break', 50);

                              case 33:
                                    return _context.abrupt('break', 50);

                              case 34:
                                    _context.next = 36;
                                    return (0, _hacker.sendHackerTemplate)(webhookEvent.sender.id);

                              case 36:
                                    templato = _context.sent;

                                    console.log(templato);
                                    _context.next = 40;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, templato);

                              case 40:
                                    return _context.abrupt('break', 50);

                              case 41:
                                    return _context.abrupt('break', 50);

                              case 42:
                                    _context.next = 44;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _answers.help);

                              case 44:
                                    return _context.abrupt('break', 50);

                              case 45:
                                    _context.next = 47;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Tenhle příkaz neznám... promiň :-(');

                              case 47:
                                    _context.next = 49;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_quick_help']);

                              case 49:
                                    return _context.abrupt('break', 50);

                              case 50:
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var utcObject = (0, _dateAndTime.getTimeAndDateNow)();
//# sourceMappingURL=index.js.map