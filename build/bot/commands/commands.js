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

                                    //console.log(webhookEvent)
                                    //console.log(formattedMessage[0])

                                    _context.t0 = formattedMessage[0];
                                    _context.next = _context.t0 === 'ahoj' ? 6 : _context.t0 === 'moon' ? 8 : _context.t0 === 'napoveda' ? 14 : _context.t0 === 'nápověda' ? 14 : _context.t0 === 'spojeni' ? 16 : _context.t0 === 'spojení' ? 16 : _context.t0 === 'vse' ? 18 : _context.t0 === 'vše' ? 18 : _context.t0 === 'prvak' ? 20 : _context.t0 === 'prvák' ? 20 : _context.t0 === 'fakulty' ? 22 : _context.t0 === 'fakulta' ? 22 : _context.t0 === 'koleje' ? 24 : _context.t0 === 'kolej' ? 24 : _context.t0 === 'insis' ? 26 : _context.t0 === 'isis' ? 26 : _context.t0 === 'hackernews' ? 28 : _context.t0 === 'jb' ? 30 : 32;
                                    break;

                              case 6:
                                    (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'Kravina');
                                    return _context.abrupt('break', 32);

                              case 8:
                                    text1 = 'Mojím hlavním úkolem je tě informovat o novinkách, které tě zrovna zajímají.';
                                    text2 = 'Zeptej se me na napovedu a ja ti reknu dalsi prikazy, ktere umim.';
                                    text3 = 'Jo a takhle vypadam. :D';
                                    //sendGenMessage(webhookEvent.sender.id, obsah)

                                    _context.next = 13;
                                    return (0, _messages.sendTextMessage)(webhookEvent.sender.id, text1).then(function () {
                                          (0, _messages.sendTextMessage)(webhookEvent.sender.id, text2);
                                    }).then(function () {
                                          (0, _messages.sendTextMessage)(webhookEvent.sender.id, text3);
                                    });

                              case 13:
                                    return _context.abrupt('break', 32);

                              case 14:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_quick']);
                                    return _context.abrupt('break', 32);

                              case 16:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_idos']);
                                    return _context.abrupt('break', 32);

                              case 18:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_school']);
                                    return _context.abrupt('break', 32);

                              case 20:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['send_manual']);
                                    return _context.abrupt('break', 32);

                              case 22:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_faculties']);
                                    return _context.abrupt('break', 32);

                              case 24:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_dormitories']);
                                    return _context.abrupt('break', 32);

                              case 26:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_isis']);
                                    return _context.abrupt('break', 32);

                              case 28:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_hackernews']);
                                    return _context.abrupt('break', 32);

                              case 30:
                                    (0, _messages.sendGenMessage)(webhookEvent.sender.id, _templates.templates['get_jb']);
                                    return _context.abrupt('break', 32);

                              case 32:
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

var _templates = require('../../views/templates');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=commands.js.map