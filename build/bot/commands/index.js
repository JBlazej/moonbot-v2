'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moon' ? 8 : _context.t0 === 'napoveda' ? 10 : _context.t0 === 'nápověda' ? 10 : _context.t0 === 'spojeni' ? 11 : _context.t0 === 'spojení' ? 11 : _context.t0 === 'spoj' ? 12 : _context.t0 === 'vse' ? 14 : _context.t0 === 'vše' ? 14 : _context.t0 === 'prvak' ? 15 : _context.t0 === 'prvák' ? 15 : _context.t0 === 'fakulty' ? 16 : _context.t0 === 'fakulta' ? 16 : _context.t0 === 'koleje' ? 17 : _context.t0 === 'kolej' ? 17 : _context.t0 === 'insis' ? 18 : _context.t0 === 'isis' ? 18 : _context.t0 === 'hackernews' ? 19 : _context.t0 === 'jb' ? 20 : 21;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 21);

                              case 8:
                                    (0, _messages.sendIntroduction)(webhookEvent.sender.id, _messages2.intro[0], _messages2.intro[1], _messages2.intro[3]);
                                    return _context.abrupt('break', 21);

                              case 10:
                                    return _context.abrupt('break', 21);

                              case 11:
                                    return _context.abrupt('break', 21);

                              case 12:
                                    (0, _idos.sendIdosAnswer)('1986144768118336', webhookEvent.message.text, '20:30', '22.11.2018');
                                    return _context.abrupt('break', 21);

                              case 14:
                                    return _context.abrupt('break', 21);

                              case 15:
                                    return _context.abrupt('break', 21);

                              case 16:
                                    return _context.abrupt('break', 21);

                              case 17:
                                    return _context.abrupt('break', 21);

                              case 18:
                                    return _context.abrupt('break', 21);

                              case 19:
                                    return _context.abrupt('break', 21);

                              case 20:
                                    return _context.abrupt('break', 21);

                              case 21:
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//import {templates} from '../../views/templates'


console.log(_messages2.intro[0]);
//# sourceMappingURL=index.js.map