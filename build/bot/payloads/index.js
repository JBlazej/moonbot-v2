'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.payloads = undefined;

var payloads = exports.payloads = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, payload) {
        var msg1, msg2, msg3;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = payload;
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'newStories' ? 9 : _context.t0 === 'subHacker' ? 10 : _context.t0 === 'unsubHacker' ? 11 : _context.t0 === 'like' ? 12 : _context.t0 === 'next' ? 13 : _context.t0 === 'howToIdos' ? 15 : _context.t0 === 'vse' ? 16 : _context.t0 === 'ffu' ? 17 : _context.t0 === 'fmv' ? 18 : _context.t0 === 'fph' ? 19 : _context.t0 === 'fis' ? 20 : _context.t0 === 'nf' ? 21 : _context.t0 === 'fm' ? 22 : _context.t0 === 'blanice' ? 23 : _context.t0 === 'vltava' ? 24 : _context.t0 === 'jarov1' ? 25 : _context.t0 === 'jarov1E' ? 26 : _context.t0 === 'jarov2' ? 27 : _context.t0 === 'jarov3G' ? 28 : _context.t0 === 'roos' ? 29 : _context.t0 === 'svec' ? 30 : _context.t0 === 'sayAboutMe' ? 31 : 32;
                        break;

                    case 3:
                        //let date = getTime(new Date())

                        msg1 = 'Ahoj já jsem Moonbot. Je --10:30-- hodin a Ty si mě zrovna oživil';
                        msg2 = 'Jak se máš? Já se mám dneska fakt skvěle. Konečně je tu někdo komu můžu pomoct';
                        msg3 = 'Napiš příkaz moon a já ti o sobě řeknu více';
                        _context.next = 8;
                        return (0, _messages.sendTextMessage)(id, msg1).then(function () {
                            (0, _messages.sendTextMessage)(id, msg2);
                        }).then(function () {
                            (0, _messages.sendTextMessage)(id, msg3);
                        });

                    case 8:
                        return _context.abrupt('break', 32);

                    case 9:
                        return _context.abrupt('break', 32);

                    case 10:
                        return _context.abrupt('break', 32);

                    case 11:
                        return _context.abrupt('break', 32);

                    case 12:
                        return _context.abrupt('break', 32);

                    case 13:
                        (0, _idos.sendNextIDos)(id);
                        //shiftTimeAndDateUTC(utc)
                        //sendIdosAnswer(id, 'volha', 'chodov', utc)
                        return _context.abrupt('break', 32);

                    case 15:
                        return _context.abrupt('break', 32);

                    case 16:
                        return _context.abrupt('break', 32);

                    case 17:
                        return _context.abrupt('break', 32);

                    case 18:
                        return _context.abrupt('break', 32);

                    case 19:
                        return _context.abrupt('break', 32);

                    case 20:
                        return _context.abrupt('break', 32);

                    case 21:
                        return _context.abrupt('break', 32);

                    case 22:
                        return _context.abrupt('break', 32);

                    case 23:
                        return _context.abrupt('break', 32);

                    case 24:
                        return _context.abrupt('break', 32);

                    case 25:
                        return _context.abrupt('break', 32);

                    case 26:
                        return _context.abrupt('break', 32);

                    case 27:
                        return _context.abrupt('break', 32);

                    case 28:
                        return _context.abrupt('break', 32);

                    case 29:
                        return _context.abrupt('break', 32);

                    case 30:
                        return _context.abrupt('break', 32);

                    case 31:
                        return _context.abrupt('break', 32);

                    case 32:
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

var _messages = require('../lib/messages');

var _idos = require('../idos');

var _dateAndTime = require('../lib/dateAndTime');

var _user = require('../../models/v1/user');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map