'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createNewUser = exports.modifyUserById = exports.getUserAll = undefined;

var getUserAll = exports.getUserAll = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _.getDB)().model('User', UserSchema).find({});

                    case 2:
                        user = _context.sent;
                        return _context.abrupt('return', user);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getUserAll() {
        return _ref.apply(this, arguments);
    };
}();

var modifyUserById = exports.modifyUserById = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, from, to, utcTimeAndDate) {
        var data, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = {
                            station: {
                                from: from,
                                to: to,
                                time: utcTimeAndDate
                            }
                        };

                        console.log(data);

                        _context2.next = 4;
                        return (0, _.getDB)().model('User', UserSchema).findOneAndUpdate({ id: id }, data, { new: true });

                    case 4:
                        user = _context2.sent;
                        return _context2.abrupt('return', user);

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function modifyUserById(_x, _x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var createNewUser = exports.createNewUser = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var User, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _.getDB)().model('User', UserSchema);

                    case 2:
                        User = _context3.sent;
                        user = new User({ id: id });

                        user.save();

                        return _context3.abrupt('return', user);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function createNewUser(_x5) {
        return _ref3.apply(this, arguments);
    };
}();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// USERS SCHEMA
// -----------------------------------------------------------------------------
var UserSchema = new _mongoose2.default.Schema({
    id: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    station: {
        from: {
            type: String,
            default: 'volha'
        },
        to: {
            type: String,
            default: 'husinecka'
        },
        time: {
            type: Date,
            default: Date.now
        }
    },
    hacker: {
        type: Boolean,
        default: false
    }
});
//# sourceMappingURL=user.js.map