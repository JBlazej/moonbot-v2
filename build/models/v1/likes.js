'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Like = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LIKES SCHEMA
// -----------------------------------------------------------------------------
var LikeSchema = new _mongoose2.default.Schema({
  year: {
    type: Number
  },
  likes: {
    type: Number
  }
});

var Like = exports.Like = _mongoose2.default.model('Like', LikeSchema);
//# sourceMappingURL=likes.js.map