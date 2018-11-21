'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTextMessage = sendTextMessage;
exports.sendGenMessage = sendGenMessage;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _graph = require('../conf/graph');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendTextMessage(sender, text) {
  var options = {
    url: _graph.GRAPH_URL_MESSAGES,
    qs: { access_token: _graph.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: { text: text }
    }
  };

  return (0, _request2.default)(options);
}

function sendGenMessage(sender, message) {
  var options = {
    url: _graph.GRAPH_URL_MESSAGES,
    qs: { access_token: _graph.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: message
    }
  };

  return (0, _request2.default)(options);
}
//# sourceMappingURL=messages.js.map