'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createNewUser = exports.updateUserById = exports.modifyUserById = exports.getUserById = exports.getUserAll = undefined;

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

var getUserById = exports.getUserById = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _.getDB)().model('User', UserSchema).find({ "id": id });

                    case 2:
                        user = _context2.sent;
                        return _context2.abrupt('return', user);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getUserById(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var modifyUserById = exports.modifyUserById = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, from, to, utcTimeAndDate) {
        var data, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = {
                            station: {
                                from: from,
                                to: to,
                                time: utcTimeAndDate
                            }
                        };
                        _context3.next = 3;
                        return (0, _.getDB)().model('User', UserSchema).findOneAndUpdate({ id: id }, data, { new: true });

                    case 3:
                        user = _context3.sent;
                        return _context3.abrupt('return', user);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function modifyUserById(_x2, _x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

var updateUserById = exports.updateUserById = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        var data, user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        data = {
                            id: id
                        };
                        _context4.next = 3;
                        return (0, _.getDB)().model('User', UserSchema).findOneAndUpdate({ id: id }, data, { new: true });

                    case 3:
                        user = _context4.sent;
                        return _context4.abrupt('return', user);

                    case 5:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function updateUserById(_x6) {
        return _ref4.apply(this, arguments);
    };
}();

var createNewUser = exports.createNewUser = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        var User, user, help;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return (0, _.getDB)().model('User', UserSchema);

                    case 2:
                        User = _context5.sent;
                        user = new User({ id: id });
                        _context5.next = 6;
                        return getUserById(id);

                    case 6:
                        help = _context5.sent;

                        console.log(help.length);

                        if (!(help.length === 0)) {
                            _context5.next = 13;
                            break;
                        }

                        user.save();
                        return _context5.abrupt('return', user);

                    case 13:
                        updateUserById(id);

                    case 14:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function createNewUser(_x7) {
        return _ref5.apply(this, arguments);
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