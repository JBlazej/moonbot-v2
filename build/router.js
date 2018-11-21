'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requireDir = require('require-dir');

var _requireDir2 = _interopRequireDefault(_requireDir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = (0, _requireDir2.default)('./controllers');

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
var wrap = function wrap(fn) {
    return function () {
        return fn.apply(undefined, arguments).catch(arguments.length <= 2 ? undefined : arguments[2]);
    };
};

var router = (0, _express.Router)();

// HOME
router.get('/', function (req, res) {
    res.status(200).json({ good: 'Nice' });
});

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/facebook-webhook', wrap(controller.facebook.facebookVerificationHook));

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/facebook-webhook', wrap(controller.facebook.facebookEventHook));

exports.default = router;
//# sourceMappingURL=router.js.map