'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sigtermFE = exports.sigtermBE = undefined;

var sigtermBE = exports.sigtermBE = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _nodeCron2.default.schedule('*/10 * * * *', function () {
              (0, _request2.default)('https://moonbot-v2.herokuapp.com');
            });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sigtermBE() {
    return _ref.apply(this, arguments);
  };
}();

var sigtermFE = exports.sigtermFE = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _nodeCron2.default.schedule('*/10 * * * *', function () {
              (0, _request2.default)('https://moonbot-v2-front.herokuapp.com');
            });

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function sigtermFE() {
    return _ref2.apply(this, arguments);
  };
}();

var _nodeCron = require('node-cron');

var _nodeCron2 = _interopRequireDefault(_nodeCron);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=sigterm.js.map