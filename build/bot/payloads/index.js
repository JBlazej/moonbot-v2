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
                        _context.next = _context.t0 === 'started-payload' ? 3 : _context.t0 === 'newStories' ? 6 : _context.t0 === 'subHacker' ? 7 : _context.t0 === 'unsubHacker' ? 8 : _context.t0 === 'like' ? 9 : _context.t0 === 'next' ? 10 : _context.t0 === 'howToIdos' ? 12 : _context.t0 === 'vse' ? 13 : _context.t0 === 'ffu' ? 14 : _context.t0 === 'fmv' ? 15 : _context.t0 === 'fph' ? 16 : _context.t0 === 'fis' ? 17 : _context.t0 === 'nf' ? 18 : _context.t0 === 'fm' ? 19 : _context.t0 === 'blanice' ? 20 : _context.t0 === 'vltava' ? 21 : _context.t0 === 'jarov1' ? 22 : _context.t0 === 'jarov1E' ? 23 : _context.t0 === 'jarov2' ? 24 : _context.t0 === 'jarov3G' ? 25 : _context.t0 === 'roos' ? 26 : _context.t0 === 'svec' ? 27 : _context.t0 === 'sayAboutMe' ? 28 : 29;
                        break;

                    case 3:
                        (0, _messages.sendIntroduction)(id, _messages2.starter[0], _messages2.starter[1], _messages2.starter[2]);
                        (0, _user.createNewUser)(id);
                        return _context.abrupt('break', 29);

                    case 6:
                        return _context.abrupt('break', 29);

                    case 7:
                        return _context.abrupt('break', 29);

                    case 8:
                        return _context.abrupt('break', 29);

                    case 9:
                        return _context.abrupt('break', 29);

                    case 10:
                        (0, _idos.sendNextIdos)(id);
                        return _context.abrupt('break', 29);

                    case 12:
                        return _context.abrupt('break', 29);

                    case 13:
                        return _context.abrupt('break', 29);

                    case 14:
                        return _context.abrupt('break', 29);

                    case 15:
                        return _context.abrupt('break', 29);

                    case 16:
                        return _context.abrupt('break', 29);

                    case 17:
                        return _context.abrupt('break', 29);

                    case 18:
                        return _context.abrupt('break', 29);

                    case 19:
                        return _context.abrupt('break', 29);

                    case 20:
                        return _context.abrupt('break', 29);

                    case 21:
                        return _context.abrupt('break', 29);

                    case 22:
                        return _context.abrupt('break', 29);

                    case 23:
                        return _context.abrupt('break', 29);

                    case 24:
                        return _context.abrupt('break', 29);

                    case 25:
                        return _context.abrupt('break', 29);

                    case 26:
                        return _context.abrupt('break', 29);

                    case 27:
                        return _context.abrupt('break', 29);

                    case 28:
                        return _context.abrupt('break', 29);

                    case 29:
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

var _messages2 = require('../../views/messages');

var _user = require('../../models/v1/user');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=index.js.map