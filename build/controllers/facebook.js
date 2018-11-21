'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var facebookVerificationHook = exports.facebookVerificationHook = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var VERIFY_TOKEN, mode, token, challenge;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // Your verify token. Should be a random string.
                        VERIFY_TOKEN = "TriPrsaNaHrudi89";

                        // Parse the query params

                        mode = req.query['hub.mode'];
                        token = req.query['hub.verify_token'];
                        challenge = req.query['hub.challenge'];

                        // Checks if a token and mode is in the query string of the request

                        if (mode && token) {
                            if (mode === 'subscribe' && token === VERIFY_TOKEN) {

                                res.status(200).send(challenge);
                            } else {
                                res.sendStatus(403);
                            }
                        }

                    case 5:
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

var facebookEventHook = exports.facebookEventHook = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        body = req.body;


                        if (body.object === 'page') {
                            // Iterates over each entry - there may be multiple if batched
                            body.entry.forEach(function (entry) {
                                entry.messaging.forEach(function (event) {
                                    //let webhook_event = entry.messaging[0]
                                    var webhook_event = event;

                                    console.log(webhook_event.message);
                                    console.log(webhook_event.postback);
                                });
                            });
                            res.status(200).send('EVENT_RECEIVED');
                        } else {
                            res.sendStatus(404);
                        }

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function facebookEventHook(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//# sourceMappingURL=facebook.js.map