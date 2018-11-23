'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.botMessageMiddleware = undefined;

var botMessageMiddleware = exports.botMessageMiddleware = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var webhookEvent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            webhookEvent = event;

            if (!webhookEvent.message) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', (0, _commands.commands)(webhookEvent));

          case 5:
            return _context.abrupt('return', (0, _payloads.payloads)(webhookEvent.sender.id, webhookEvent.postback.payload));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function botMessageMiddleware(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _commands = require('./commands');

var _payloads = require('./payloads');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=middleware.js.map