'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.commands = undefined;

var commands = exports.commands = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var webhookEvent, incomeMessage, formattedMessage, text1, text2, text3;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                        switch (_context.prev = _context.next) {
                              case 0:
                                    webhookEvent = event;
                                    incomeMessage = webhookEvent.message.text.toLowerCase().trim();
                                    formattedMessage = incomeMessage.toString().split(" ");
                                    text1 = 'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.';
                                    text2 = 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.';
                                    text3 = 'Jo a takhle vypadam. :D';

                                    //console.log(webhookEvent)
                                    //console.log(formattedMessage[0])

                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 9 : _context.t0 === 'moon' ? 11 : _context.t0 === 'napoveda' ? 13 : _context.t0 === 'nápověda' ? 13 : _context.t0 === 'spojeni' ? 14 : _context.t0 === 'spojení' ? 14 : _context.t0 === 'spoj' ? 15 : _context.t0 === 'vse' ? 17 : _context.t0 === 'vše' ? 17 : _context.t0 === 'prvak' ? 18 : _context.t0 === 'prvák' ? 18 : _context.t0 === 'fakulty' ? 19 : _context.t0 === 'fakulta' ? 19 : _context.t0 === 'koleje' ? 20 : _context.t0 === 'kolej' ? 20 : _context.t0 === 'insis' ? 21 : _context.t0 === 'isis' ? 21 : _context.t0 === 'hackernews' ? 22 : _context.t0 === 'jb' ? 23 : 24;
                                    break;

                              case 9:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 24);

                              case 11:

                                    //sendGenMessage(webhookEvent.sender.id, obsah)
                                    (0, _messages.sendIntroduction)(webhookEvent.sender.id, text1, text2, text3);
                                    return _context.abrupt('break', 24);

                              case 13:
                                    return _context.abrupt('break', 24);

                              case 14:
                                    return _context.abrupt('break', 24);

                              case 15:
                                    (0, _idos.sendIdosAnswer)('1986144768118336', webhookEvent.message.text, '20:30', '22.11.2018');
                                    return _context.abrupt('break', 24);

                              case 17:
                                    return _context.abrupt('break', 24);

                              case 18:
                                    return _context.abrupt('break', 24);

                              case 19:
                                    return _context.abrupt('break', 24);

                              case 20:
                                    return _context.abrupt('break', 24);

                              case 21:
                                    return _context.abrupt('break', 24);

                              case 22:
                                    return _context.abrupt('break', 24);

                              case 23:
                                    return _context.abrupt('break', 24);

                              case 24:
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//import {templates} from '../../views/templates'
//# sourceMappingURL=index.js.map