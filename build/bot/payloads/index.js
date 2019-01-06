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
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'idos-intro' ? 10 : _context.t0 === 'idos-next' ? 15 : _context.t0 === 'idos-like' ? 17 : _context.t0 === 'hacker-intro' ? 23 : _context.t0 === 'hacker-new-news' ? 24 : _context.t0 === 'hacker-subscribe' ? 26 : _context.t0 === 'hacker-unsubscribe' ? 29 : _context.t0 === 'set-en' ? 32 : _context.t0 === 'set-de' ? 35 : _context.t0 === 'set-es' ? 38 : _context.t0 === 'vse-info' ? 41 : _context.t0 === 'colleges' ? 44 : _context.t0 === 'faculties' ? 46 : _context.t0 === 'ffu' ? 48 : _context.t0 === 'fmv' ? 49 : _context.t0 === 'fph' ? 50 : _context.t0 === 'fis' ? 51 : _context.t0 === 'nf' ? 52 : _context.t0 === 'fm' ? 53 : _context.t0 === 'blanice' ? 54 : _context.t0 === 'vltava' ? 55 : _context.t0 === 'jarov1' ? 56 : _context.t0 === 'jarov1E' ? 57 : _context.t0 === 'jarov2' ? 58 : _context.t0 === 'jarov3G' ? 59 : _context.t0 === 'roos' ? 60 : _context.t0 === 'svec' ? 61 : _context.t0 === 'sayAboutMe' ? 62 : 63;
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
                        return _context.abrupt('break', 63);

                    case 10:
                        _context.next = 12;
                        return (0, _messages.sendMultipleMessages)(id, _answers.introIDOS);

                    case 12:
                        _context.next = 14;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_idos_intro']);

                    case 14:
                        return _context.abrupt('break', 63);

                    case 15:
                        (0, _idos.sendNextIdos)(id);
                        return _context.abrupt('break', 63);

                    case 17:
                        utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                        _context.next = 20;
                        return (0, _like.incrementLikeInstance)(utcObject.year, 1);

                    case 20:
                        _context.next = 22;
                        return (0, _messages.sendTextMessage)(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.');

                    case 22:
                        return _context.abrupt('break', 63);

                    case 23:
                        return _context.abrupt('break', 63);

                    case 24:
                        (0, _hacker.sendHackerNews)(id);
                        return _context.abrupt('break', 63);

                    case 26:
                        (0, _user.setHackerNews)(id, true);
                        (0, _messages.sendTextMessage)(id, 'Děkuj za tvůj odběr.');
                        return _context.abrupt('break', 63);

                    case 29:
                        (0, _user.setHackerNews)(id, false);
                        (0, _messages.sendTextMessage)(id, 'Nevadí tak kdyžtak příště.');
                        return _context.abrupt('break', 63);

                    case 32:
                        (0, _user.setLanguage)(id, 'en');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 63);

                    case 35:
                        (0, _user.setLanguage)(id, 'de');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 63);

                    case 38:
                        (0, _user.setLanguage)(id, 'es');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 63);

                    case 41:
                        _context.next = 43;
                        return (0, _messages.sendMultipleMessages)(id, _answers.vseInfo);

                    case 43:
                        return _context.abrupt('break', 63);

                    case 44:
                        (0, _messages.sendGenMessage)(id, _templates.templates['get_dormitories']);
                        return _context.abrupt('break', 63);

                    case 46:
                        (0, _messages.sendGenMessage)(id, _templates.templates['get_faculties']);
                        return _context.abrupt('break', 63);

                    case 48:
                        return _context.abrupt('break', 63);

                    case 49:
                        return _context.abrupt('break', 63);

                    case 50:
                        return _context.abrupt('break', 63);

                    case 51:
                        return _context.abrupt('break', 63);

                    case 52:
                        return _context.abrupt('break', 63);

                    case 53:
                        return _context.abrupt('break', 63);

                    case 54:
                        return _context.abrupt('break', 63);

                    case 55:
                        return _context.abrupt('break', 63);

                    case 56:
                        return _context.abrupt('break', 63);

                    case 57:
                        return _context.abrupt('break', 63);

                    case 58:
                        return _context.abrupt('break', 63);

                    case 59:
                        return _context.abrupt('break', 63);

                    case 60:
                        return _context.abrupt('break', 63);

                    case 61:
                        return _context.abrupt('break', 63);

                    case 62:
                        return _context.abrupt('break', 63);

                    case 63:
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