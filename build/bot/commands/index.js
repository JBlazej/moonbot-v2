'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, introTravel;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moon' ? 8 : _context.t0 === 'spojeni' ? 10 : _context.t0 === 'spojení' ? 10 : _context.t0 === 'vyzkoušet' ? 15 : _context.t0 === 'vyzkouset' ? 15 : _context.t0 === 'spoj' ? 21 : _context.t0 === 'vse' ? 23 : _context.t0 === 'vše' ? 23 : _context.t0 === 'prvak' ? 26 : _context.t0 === 'prvák' ? 26 : _context.t0 === 'fakulty' ? 27 : _context.t0 === 'fakulta' ? 27 : _context.t0 === 'koleje' ? 28 : _context.t0 === 'kolej' ? 28 : _context.t0 === 'insis' ? 29 : _context.t0 === 'isis' ? 29 : _context.t0 === 'hackernews' ? 30 : _context.t0 === 'jb' ? 31 : _context.t0 === 'napoveda' ? 32 : _context.t0 === 'nápověda' ? 32 : 35;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 40);

                              case 8:
                                    (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _messages2.intro);
                                    return _context.abrupt('break', 40);

                              case 10:
                                    _context.next = 12;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _messages2.introIDOS);

                              case 12:
                                    _context.next = 14;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_idos_intro']);

                              case 14:
                                    return _context.abrupt('break', 40);

                              case 15:
                                    introTravel = 'spoj volha do hlavni nadrazi';
                                    _context.next = 18;
                                    return (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, introTravel, utcNow);

                              case 18:
                                    _context.next = 20;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_gif']);

                              case 20:
                                    return _context.abrupt('break', 40);

                              case 21:
                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, incomeMessage, utcNow);
                                    return _context.abrupt('break', 40);

                              case 23:
                                    _context.next = 25;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);

                              case 25:
                                    return _context.abrupt('break', 40);

                              case 26:
                                    return _context.abrupt('break', 40);

                              case 27:
                                    return _context.abrupt('break', 40);

                              case 28:
                                    return _context.abrupt('break', 40);

                              case 29:
                                    return _context.abrupt('break', 40);

                              case 30:
                                    return _context.abrupt('break', 40);

                              case 31:
                                    return _context.abrupt('break', 40);

                              case 32:
                                    _context.next = 34;
                                    return (0, _messages.sendMultipleMessages)(webhookEvent.sender.id, _messages2.help);

                              case 34:
                                    return _context.abrupt('break', 40);

                              case 35:
                                    _context.next = 37;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Tenhle příkaz neznám... promiň :-(');

                              case 37:
                                    _context.next = 39;
                                    return (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_quick_help']);

                              case 39:
                                    return _context.abrupt('break', 40);

                              case 40:
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

var _idos = require('../idos');

var _messages2 = require('../../views/messages');

var _templates = require('../../views/templates');

var _user = require('../../models/v1/user');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var utcNow = new Date();
//# sourceMappingURL=index.js.map