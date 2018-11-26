'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.payloads = undefined;

var payloads = exports.payloads = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, payload) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = payload;
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'idos-intro' ? 10 : _context.t0 === 'idos-next' ? 15 : _context.t0 === 'idos-like' ? 17 : _context.t0 === 'hacker-intro' ? 22 : _context.t0 === 'hacker-new-news' ? 23 : _context.t0 === 'hacker-subscribe' ? 25 : _context.t0 === 'hacker-unsubscribe' ? 28 : _context.t0 === 'vse' ? 31 : _context.t0 === 'ffu' ? 32 : _context.t0 === 'fmv' ? 33 : _context.t0 === 'fph' ? 34 : _context.t0 === 'fis' ? 35 : _context.t0 === 'nf' ? 36 : _context.t0 === 'fm' ? 37 : _context.t0 === 'blanice' ? 38 : _context.t0 === 'vltava' ? 39 : _context.t0 === 'jarov1' ? 40 : _context.t0 === 'jarov1E' ? 41 : _context.t0 === 'jarov2' ? 42 : _context.t0 === 'jarov3G' ? 43 : _context.t0 === 'roos' ? 44 : _context.t0 === 'svec' ? 45 : _context.t0 === 'sayAboutMe' ? 46 : 47;
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
                        return _context.abrupt('break', 47);

                    case 10:
                        _context.next = 12;
                        return (0, _messages.sendMultipleMessages)(id, _answers.introIDOS);

                    case 12:
                        _context.next = 14;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_idos_intro']);

                    case 14:
                        return _context.abrupt('break', 47);

                    case 15:
                        (0, _idos.sendNextIdos)(id);
                        return _context.abrupt('break', 47);

                    case 17:
                        _context.next = 19;
                        return (0, _like.incrementLikeInstance)(utcObject.year, 1);

                    case 19:
                        _context.next = 21;
                        return (0, _messages.sendTextMessage)(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.');

                    case 21:
                        return _context.abrupt('break', 47);

                    case 22:
                        return _context.abrupt('break', 47);

                    case 23:
                        (0, _hacker.sendHackerNews)(id);
                        return _context.abrupt('break', 47);

                    case 25:
                        (0, _user.setHackerNews)(id, true);
                        (0, _messages.sendTextMessage)(id, 'Děkuj za tvůj odběr.');
                        return _context.abrupt('break', 47);

                    case 28:
                        (0, _user.setHackerNews)(id, false);
                        (0, _messages.sendTextMessage)(id, 'Nevadí tak kdyžtak příště.');
                        return _context.abrupt('break', 47);

                    case 31:
                        return _context.abrupt('break', 47);

                    case 32:
                        return _context.abrupt('break', 47);

                    case 33:
                        return _context.abrupt('break', 47);

                    case 34:
                        return _context.abrupt('break', 47);

                    case 35:
                        return _context.abrupt('break', 47);

                    case 36:
                        return _context.abrupt('break', 47);

                    case 37:
                        return _context.abrupt('break', 47);

                    case 38:
                        return _context.abrupt('break', 47);

                    case 39:
                        return _context.abrupt('break', 47);

                    case 40:
                        return _context.abrupt('break', 47);

                    case 41:
                        return _context.abrupt('break', 47);

                    case 42:
                        return _context.abrupt('break', 47);

                    case 43:
                        return _context.abrupt('break', 47);

                    case 44:
                        return _context.abrupt('break', 47);

                    case 45:
                        return _context.abrupt('break', 47);

                    case 46:
                        return _context.abrupt('break', 47);

                    case 47:
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

var _like = require('../../services/like');

var _messages = require('../lib/messages');

var _answers = require('../lib/answers');

var _templates = require('../lib/templates');

var _dateAndTime = require('../lib/dateAndTime');

var _idos = require('../idos');

var _hacker = require('../hacker');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var utcObject = (0, _dateAndTime.getTimeAndDateNow)();
//# sourceMappingURL=index.js.map