'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.botMessengerMiddleware = undefined;

var botMessengerMiddleware = exports.botMessengerMiddleware = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var webhookEvent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            webhookEvent = event;


            if (webhookEvent.message) {
              if (webhookEvent.message.text) {
                // Text
                (0, _commands.commands)(webhookEvent);
              } else {
                // Attachments or likes
                (0, _messages.sendTextMessage)(webhookEvent.sender.id, 'O tomhle nic moc nevím...');
              }
            } else {
              // Payload
              (0, _payloads.payloads)(webhookEvent.sender.id, webhookEvent.postback.payload);
            }

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function botMessengerMiddleware(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Likes
// 369239383222810 369239263222822 369239343222814


var _commands = require('./commands');

var _payloads = require('./payloads');

var _messages = require('./lib/messages');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=middleware.js.map