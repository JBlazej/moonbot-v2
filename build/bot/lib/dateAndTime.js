'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDate = exports.getTime = undefined;

var getTime = exports.getTime = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(utcDate) {
        var actualTime, shiftedTime, formatedTime;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        actualTime = (0, _moment2.default)(utcDate);
                        shiftedTime = actualTime.add(1, 'hours');
                        formatedTime = shiftedTime.format('HH:mm');


                        console.log(formatedTime);

                        return _context.abrupt('return', formatedTime);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getTime(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getDate = exports.getDate = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(utcDate) {
        var actualDate;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        actualDate = (0, _moment2.default)(utcDate).format('D.M.YYYY');

                        console.log(actualDate);
                        return _context2.abrupt('return', actualDate);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getDate(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var help = new Date();
getTime(help);
//# sourceMappingURL=dateAndTime.js.map