'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.payloads = undefined;

var payloads = exports.payloads = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, payload) {
        var utcObject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = payload;
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'idos-intro' ? 10 : _context.t0 === 'idos-next' ? 15 : _context.t0 === 'idos-like' ? 17 : _context.t0 === 'hacker-intro' ? 23 : _context.t0 === 'hacker-new-news' ? 24 : _context.t0 === 'hacker-subscribe' ? 26 : _context.t0 === 'hacker-unsubscribe' ? 29 : _context.t0 === 'vse' ? 32 : _context.t0 === 'ffu' ? 33 : _context.t0 === 'fmv' ? 34 : _context.t0 === 'fph' ? 35 : _context.t0 === 'fis' ? 36 : _context.t0 === 'nf' ? 37 : _context.t0 === 'fm' ? 38 : _context.t0 === 'blanice' ? 39 : _context.t0 === 'vltava' ? 40 : _context.t0 === 'jarov1' ? 41 : _context.t0 === 'jarov1E' ? 42 : _context.t0 === 'jarov2' ? 43 : _context.t0 === 'jarov3G' ? 44 : _context.t0 === 'roos' ? 45 : _context.t0 === 'svec' ? 46 : _context.t0 === 'sayAboutMe' ? 47 : 48;
                        break;

                    case 3:
                        _context.next = 5;
                        return (0, _messages.sendMultipleMessages)(id, (0, _answers.getStartedPayload)());

                    case 5:
                        _context.next = 7;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_info']);

                    case 7:
                        _context.next = 9;
                        return (0, _user.createNewUser)(id);

                    case 9:
                        return _context.abrupt('break', 48);

                    case 10:
                        _context.next = 12;
                        return (0, _messages.sendMultipleMessages)(id, _answers.introIDOS);

                    case 12:
                        _context.next = 14;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_idos_intro']);

                    case 14:
                        return _context.abrupt('break', 48);

                    case 15:
                        (0, _idos.sendNextIdos)(id);
                        return _context.abrupt('break', 48);

                    case 17:
                        utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                        _context.next = 20;
                        return (0, _like.incrementLikeInstance)(utcObject.year, 1);

                    case 20:
                        _context.next = 22;
                        return (0, _messages.sendTextMessage)(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.');

                    case 22:
                        return _context.abrupt('break', 48);

                    case 23:
                        return _context.abrupt('break', 48);

                    case 24:
                        (0, _hacker.sendHackerNews)(id);
                        return _context.abrupt('break', 48);

                    case 26:
                        (0, _user.setHackerNews)(id, true);
                        (0, _messages.sendTextMessage)(id, 'Děkuj za tvůj odběr.');
                        return _context.abrupt('break', 48);

                    case 29:
                        (0, _user.setHackerNews)(id, false);
                        (0, _messages.sendTextMessage)(id, 'Nevadí tak kdyžtak příště.');
                        return _context.abrupt('break', 48);

                    case 32:
                        return _context.abrupt('break', 48);

                    case 33:
                        return _context.abrupt('break', 48);

                    case 34:
                        return _context.abrupt('break', 48);

                    case 35:
                        return _context.abrupt('break', 48);

                    case 36:
                        return _context.abrupt('break', 48);

                    case 37:
                        return _context.abrupt('break', 48);

                    case 38:
                        return _context.abrupt('break', 48);

                    case 39:
                        return _context.abrupt('break', 48);

                    case 40:
                        return _context.abrupt('break', 48);

                    case 41:
                        return _context.abrupt('break', 48);

                    case 42:
                        return _context.abrupt('break', 48);

                    case 43:
                        return _context.abrupt('break', 48);

                    case 44:
                        return _context.abrupt('break', 48);

                    case 45:
                        return _context.abrupt('break', 48);

                    case 46:
                        return _context.abrupt('break', 48);

                    case 47:
                        return _context.abrupt('break', 48);

                    case 48:
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
//# sourceMappingURL=index.js.map