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
                        utcObject = (0, _dateAndTime.getTimeAndDateNow)();
                        _context.t0 = payload;
                        _context.next = _context.t0 === 'started-payload' ? 4 : _context.t0 === 'idos-intro' ? 11 : _context.t0 === 'idos-like' ? 16 : _context.t0 === 'hacker-new-news' ? 21 : _context.t0 === 'hacker-subscribe' ? 23 : _context.t0 === 'hacker-unsubscribe' ? 26 : _context.t0 === 'set-en' ? 29 : _context.t0 === 'set-de' ? 32 : _context.t0 === 'set-es' ? 35 : _context.t0 === 'colleges' ? 38 : _context.t0 === 'faculties' ? 40 : _context.t0 === 'head-and-representative-1' ? 42 : _context.t0 === 'head-and-representative-2' ? 45 : _context.t0 === 'head-and-representative-3' ? 48 : _context.t0 === 'head-and-representative-4' ? 51 : _context.t0 === 'head-and-representative-5' ? 54 : _context.t0 === 'head-and-representative-6' ? 57 : _context.t0 === 'head-and-representative-7' ? 60 : _context.t0 === 'head-and-representative-8' ? 62 : _context.t0 === 'head-and-representative-9' ? 64 : _context.t0 === 'bla' ? 66 : _context.t0 === 'jarIE' ? 73 : _context.t0 === '10' ? 80 : _context.t0 === '30' ? 82 : _context.t0 === '60' ? 84 : _context.t0 === 'ffu' ? 86 : _context.t0 === 'fmv' ? 87 : _context.t0 === 'fph' ? 88 : _context.t0 === 'fis' ? 89 : _context.t0 === 'nf' ? 90 : _context.t0 === 'fm' ? 91 : _context.t0 === 'blanice' ? 92 : _context.t0 === 'vltava' ? 93 : _context.t0 === 'jarov1' ? 94 : _context.t0 === 'jarov1E' ? 95 : _context.t0 === 'jarov2' ? 96 : _context.t0 === 'jarov3G' ? 97 : _context.t0 === 'roos' ? 98 : _context.t0 === 'svec' ? 99 : _context.t0 === 'sayAboutMe' ? 100 : 101;
                        break;

                    case 4:
                        _context.next = 6;
                        return (0, _messages.sendMultipleMessages)(id, (0, _answers.getStartedPayload)());

                    case 6:
                        _context.next = 8;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_intro']);

                    case 8:
                        _context.next = 10;
                        return (0, _user.createNewUser)(id);

                    case 10:
                        return _context.abrupt('break', 101);

                    case 11:
                        _context.next = 13;
                        return (0, _messages.sendMultipleMessages)(id, _answers.introIDOS);

                    case 13:
                        _context.next = 15;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_idos_intro']);

                    case 15:
                        return _context.abrupt('break', 101);

                    case 16:
                        _context.next = 18;
                        return incrementLikeInstance(utcObject.year, 1);

                    case 18:
                        _context.next = 20;
                        return (0, _messages.sendTextMessage)(id, 'Děkuju ti za tvé hodnocení a šťastnou cestu.');

                    case 20:
                        return _context.abrupt('break', 101);

                    case 21:
                        (0, _hacker.sendHackerNews)(id);
                        return _context.abrupt('break', 101);

                    case 23:
                        (0, _user.setHackerNews)(id, true);
                        (0, _messages.sendTextMessage)(id, 'Děkuj za tvůj odběr.');
                        return _context.abrupt('break', 101);

                    case 26:
                        (0, _user.setHackerNews)(id, false);
                        (0, _messages.sendTextMessage)(id, 'Nevadí tak kdyžtak příště.');
                        return _context.abrupt('break', 101);

                    case 29:
                        (0, _user.setLanguage)(id, 'en');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 101);

                    case 32:
                        (0, _user.setLanguage)(id, 'de');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 101);

                    case 35:
                        (0, _user.setLanguage)(id, 'es');
                        (0, _messages.sendTextMessage)(id, 'Jazyk nastaven.');
                        return _context.abrupt('break', 101);

                    case 38:
                        (0, _messages.sendGenMessage)(id, _templates.templates['get_dormitories']);
                        return _context.abrupt('break', 101);

                    case 40:
                        (0, _messages.sendGenMessage)(id, _templates.templates['get_faculties']);
                        return _context.abrupt('break', 101);

                    case 42:
                        _context.next = 44;
                        return (0, _vse.sendHeadAndRep)('1', id);

                    case 44:
                        return _context.abrupt('break', 101);

                    case 45:
                        _context.next = 47;
                        return (0, _vse.sendHeadAndRep)('2', id);

                    case 47:
                        return _context.abrupt('break', 101);

                    case 48:
                        _context.next = 50;
                        return (0, _vse.sendHeadAndRep)('3', id);

                    case 50:
                        return _context.abrupt('break', 101);

                    case 51:
                        _context.next = 53;
                        return (0, _vse.sendHeadAndRep)('4', id);

                    case 53:
                        return _context.abrupt('break', 101);

                    case 54:
                        _context.next = 56;
                        return (0, _vse.sendHeadAndRep)('5', id);

                    case 56:
                        return _context.abrupt('break', 101);

                    case 57:
                        _context.next = 59;
                        return (0, _vse.sendHeadAndRep)('6', id);

                    case 59:
                        return _context.abrupt('break', 101);

                    case 60:
                        (0, _vse.sendHeadAndRep)('7', id);
                        return _context.abrupt('break', 101);

                    case 62:
                        (0, _vse.sendHeadAndRep)('8', id);
                        return _context.abrupt('break', 101);

                    case 64:
                        (0, _vse.sendHeadAndRep)('9', id);
                        return _context.abrupt('break', 101);

                    case 66:
                        _context.next = 68;
                        return (0, _user.setCollege)(id, payload);

                    case 68:
                        _context.next = 70;
                        return (0, _vse.sendOfficeHours)(id, utcObject.day, payload);

                    case 70:
                        _context.next = 72;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_hours']);

                    case 72:
                        return _context.abrupt('break', 101);

                    case 73:
                        _context.next = 75;
                        return (0, _user.setCollege)(id, payload);

                    case 75:
                        _context.next = 77;
                        return (0, _vse.sendOfficeHours)(id, utcObject.day, payload);

                    case 77:
                        _context.next = 79;
                        return (0, _messages.sendGenMessage)(id, _templates.templates['send_hours']);

                    case 79:
                        return _context.abrupt('break', 101);

                    case 80:
                        (0, _idos.sendNextIdos)(id, 10);
                        return _context.abrupt('break', 101);

                    case 82:
                        (0, _idos.sendNextIdos)(id, 30);
                        return _context.abrupt('break', 101);

                    case 84:
                        (0, _idos.sendNextIdos)(id, 60);
                        return _context.abrupt('break', 101);

                    case 86:
                        return _context.abrupt('break', 101);

                    case 87:
                        return _context.abrupt('break', 101);

                    case 88:
                        return _context.abrupt('break', 101);

                    case 89:
                        return _context.abrupt('break', 101);

                    case 90:
                        return _context.abrupt('break', 101);

                    case 91:
                        return _context.abrupt('break', 101);

                    case 92:
                        return _context.abrupt('break', 101);

                    case 93:
                        return _context.abrupt('break', 101);

                    case 94:
                        return _context.abrupt('break', 101);

                    case 95:
                        return _context.abrupt('break', 101);

                    case 96:
                        return _context.abrupt('break', 101);

                    case 97:
                        return _context.abrupt('break', 101);

                    case 98:
                        return _context.abrupt('break', 101);

                    case 99:
                        return _context.abrupt('break', 101);

                    case 100:
                        return _context.abrupt('break', 101);

                    case 101:
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

var _dateAndTime = require('../lib/dateAndTime');

var _idos = require('../idos');

var _hacker = require('../hacker');

var _vse = require('../vse');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map