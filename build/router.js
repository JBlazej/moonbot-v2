'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _requireDir = require('require-dir');

var _requireDir2 = _interopRequireDefault(_requireDir);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// HOME
router.get('/', function (req, res) {
    res.status(200).json({ good: 'Nice' });
});

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/w', function (req, res) {
    res.status(200).json({ good: 'Nice' });
});

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/w', function (req, res) {
    res.status(200).json({ good: 'Nice' });
});

exports.default = router;
//# sourceMappingURL=router.js.map