'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, utcNow, time, date;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moon' ? 8 : _context.t0 === 'napoveda' ? 10 : _context.t0 === 'nápověda' ? 10 : _context.t0 === 'spojeni' ? 11 : _context.t0 === 'spojení' ? 11 : _context.t0 === 'spoj' ? 12 : _context.t0 === 'vse' ? 21 : _context.t0 === 'vše' ? 21 : _context.t0 === 'prvak' ? 22 : _context.t0 === 'prvák' ? 22 : _context.t0 === 'fakulty' ? 23 : _context.t0 === 'fakulta' ? 23 : _context.t0 === 'koleje' ? 24 : _context.t0 === 'kolej' ? 24 : _context.t0 === 'insis' ? 25 : _context.t0 === 'isis' ? 25 : _context.t0 === 'hackernews' ? 26 : _context.t0 === 'jb' ? 27 : 28;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 28);

                              case 8:
                                    (0, _messages.sendIntroduction)(webhookEvent.sender.id, _messages2.intro[0], _messages2.intro[1], _messages2.intro[2]);
                                    return _context.abrupt('break', 28);

                              case 10:
                                    return _context.abrupt('break', 28);

                              case 11:
                                    return _context.abrupt('break', 28);

                              case 12:
                                    utcNow = new Date();
                                    _context.next = 15;
                                    return (0, _dateAndTime.getTime)(utcNow);

                              case 15:
                                    time = _context.sent;
                                    _context.next = 18;
                                    return (0, _dateAndTime.getDate)(utcNow);

                              case 18:
                                    date = _context.sent;

                                    (0, _idos.sendIdosAnswer)(webhookEvent.sender.id, webhookEvent.message.text, time, date);
                                    return _context.abrupt('break', 28);

                              case 21:
                                    return _context.abrupt('break', 28);

                              case 22:
                                    return _context.abrupt('break', 28);

                              case 23:
                                    return _context.abrupt('break', 28);

                              case 24:
                                    return _context.abrupt('break', 28);

                              case 25:
                                    return _context.abrupt('break', 28);

                              case 26:
                                    return _context.abrupt('break', 28);

                              case 27:
                                    return _context.abrupt('break', 28);

                              case 28:
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

var _messages2 = require('../../views/messages');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//import {templates} from '../../views/templates'
//# sourceMappingURL=index.js.map