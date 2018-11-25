'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.payloads = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var payloads = exports.payloads = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, payload) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = payload;
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'idos-intro' ? 10 : _context.t0 === 'newStories' ? 15 : _context.t0 === 'subHacker' ? 16 : _context.t0 === 'unsubHacker' ? 20 : _context.t0 === 'like' ? 24 : _context.t0 === 'next' ? 25 : _context.t0 === 'howToIdos' ? 27 : _context.t0 === 'vse' ? 28 : _context.t0 === 'ffu' ? 29 : _context.t0 === 'fmv' ? 30 : _context.t0 === 'fph' ? 31 : _context.t0 === 'fis' ? 32 : _context.t0 === 'nf' ? 33 : _context.t0 === 'fm' ? 34 : _context.t0 === 'blanice' ? 35 : _context.t0 === 'vltava' ? 36 : _context.t0 === 'jarov1' ? 37 : _context.t0 === 'jarov1E' ? 38 : _context.t0 === 'jarov2' ? 39 : _context.t0 === 'jarov3G' ? 40 : _context.t0 === 'roos' ? 41 : _context.t0 === 'svec' ? 42 : _context.t0 === 'sayAboutMe' ? 43 : 44;
                        break;

                    case 3:
                        _context.next = 5;
                        return (0, _messages.sendMultipleMessages)(id, _answers.starter);

                    case 5:
                        _context.next = 7;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_info']);

                    case 7:
                        _context.next = 9;
                        return (0, _user.createNewUser)(id);

                    case 9:
                        return _context.abrupt('break', 44);

                    case 10:
                        _context.next = 12;
                        return (0, _messages.sendMultipleMessages)(id, _answers.introIDOS);

                    case 12:
                        _context.next = 14;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_idos_intro']);

                    case 14:
                        return _context.abrupt('break', 44);

                    case 15:
                        return _context.abrupt('break', 44);

                    case 16:
                        userService.setHackerNews(id, true);
                        console.log(userService.setHackerNews(id, true));
                        (0, _messages.sendTextMessage)(id, 'Děkuj za tvůj odběr.');
                        return _context.abrupt('break', 44);

                    case 20:
                        userService.setHackerNews(id, false);
                        console.log(_typeof(userService.setHackerNews(id, false)));
                        (0, _messages.sendTextMessage)(id, 'Nevadí tak kdyžtak příště.');
                        return _context.abrupt('break', 44);

                    case 24:
                        return _context.abrupt('break', 44);

                    case 25:
                        (0, _idos.sendNextIdos)(id);
                        return _context.abrupt('break', 44);

                    case 27:
                        return _context.abrupt('break', 44);

                    case 28:
                        return _context.abrupt('break', 44);

                    case 29:
                        return _context.abrupt('break', 44);

                    case 30:
                        return _context.abrupt('break', 44);

                    case 31:
                        return _context.abrupt('break', 44);

                    case 32:
                        return _context.abrupt('break', 44);

                    case 33:
                        return _context.abrupt('break', 44);

                    case 34:
                        return _context.abrupt('break', 44);

                    case 35:
                        return _context.abrupt('break', 44);

                    case 36:
                        return _context.abrupt('break', 44);

                    case 37:
                        return _context.abrupt('break', 44);

                    case 38:
                        return _context.abrupt('break', 44);

                    case 39:
                        return _context.abrupt('break', 44);

                    case 40:
                        return _context.abrupt('break', 44);

                    case 41:
                        return _context.abrupt('break', 44);

                    case 42:
                        return _context.abrupt('break', 44);

                    case 43:
                        return _context.abrupt('break', 44);

                    case 44:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function payloads(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _user = require('../../services/user');

var _messages = require('../lib/messages');

var _answers = require('../lib/answers');

var _templates = require('../lib/templates');

var _idos = require('../idos');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userService = (0, _user.getUserService)();
console.log(userService.setHackerNews.setHackerNews('1959622390785359', true));
//# sourceMappingURL=index.js.map