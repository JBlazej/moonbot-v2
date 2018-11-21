'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var facebookVerificationHook = exports.facebookVerificationHook = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.query['hub.verify_token'] === process.env.VERIFICATION_TOKEN) {
              console.log('Webhook is working...');
              res.status(200).send(req.query['hub.challenge']);
            } else {
              console.log('Webhook died :-(');
              res.sendStatus(403);
            }

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function facebookVerificationHook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=facebook.js.map