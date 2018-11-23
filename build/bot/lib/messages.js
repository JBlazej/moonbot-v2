'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendIntroduction = exports.sendGenMessage = exports.sendTextMessage = undefined;

var makeRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', (0, _requestPromise2.default)(options));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function makeRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var sendTextMessage = exports.sendTextMessage = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sender, text) {
    var options;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = {
              url: _graph.GRAPH_URL_MESSAGES,
              qs: { access_token: _graph.PAGE_ACCESS_TOKEN },
              method: 'POST',
              json: {
                recipient: { id: sender },
                message: { text: text }
              }
            };
            return _context2.abrupt('return', makeRequest(options));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function sendTextMessage(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var sendGenMessage = exports.sendGenMessage = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sender, message) {
    var options;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              url: _graph.GRAPH_URL_MESSAGES,
              qs: { access_token: _graph.PAGE_ACCESS_TOKEN },
              method: 'POST',
              json: {
                recipient: { id: sender },
                message: message
              }
            };
            return _context3.abrupt('return', makeRequest(options));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function sendGenMessage(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var sendIntroduction = exports.sendIntroduction = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, text1, text2, text3) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return sendTextMessage(id, text1);

          case 2:
            _context4.next = 4;
            return sendTextMessage(id, text2);

          case 4:
            _context4.next = 6;
            return sendTextMessage(id, text3);

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function sendIntroduction(_x6, _x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _graph = require('../../conf/graph');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=messages.js.map