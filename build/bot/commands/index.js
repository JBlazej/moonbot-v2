'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, text;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moon' ? 8 : _context.t0 === 'napoveda' ? 11 : _context.t0 === 'nápověda' ? 11 : _context.t0 === 'spojeni' ? 12 : _context.t0 === 'spojení' ? 12 : _context.t0 === 'spoj' ? 13 : _context.t0 === 'vse' ? 15 : _context.t0 === 'vše' ? 15 : _context.t0 === 'prvak' ? 16 : _context.t0 === 'prvák' ? 16 : _context.t0 === 'fakulty' ? 17 : _context.t0 === 'fakulta' ? 17 : _context.t0 === 'koleje' ? 18 : _context.t0 === 'kolej' ? 18 : _context.t0 === 'insis' ? 19 : _context.t0 === 'isis' ? 19 : _context.t0 === 'hackernews' ? 20 : _context.t0 === 'jb' ? 21 : 22;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 22);

                              case 8:
                                    text = _messages2.intro;

                                    (0, _messages.sendIntroduction)(webhookEvent.sender.id, text[0], text[1], text[3]);
                                    return _context.abrupt('break', 22);

                              case 11:
                                    return _context.abrupt('break', 22);

                              case 12:
                                    return _context.abrupt('break', 22);

                              case 13:
                                    (0, _idos.sendIdosAnswer)('1986144768118336', webhookEvent.message.text, '20:30', '22.11.2018');
                                    return _context.abrupt('break', 22);

                              case 15:
                                    return _context.abrupt('break', 22);

                              case 16:
                                    return _context.abrupt('break', 22);

                              case 17:
                                    return _context.abrupt('break', 22);

                              case 18:
                                    return _context.abrupt('break', 22);

                              case 19:
                                    return _context.abrupt('break', 22);

                              case 20:
                                    return _context.abrupt('break', 22);

                              case 21:
                                    return _context.abrupt('break', 22);

                              case 22:
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


console.log(_messages2.intro[3]);
//# sourceMappingURL=index.js.map