'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformTextMessage = transformTextMessage;

var _messages = require('./messages');

function transformTextMessage(sender, text) {
    var incomeMessage = text.toLowerCase().trim();
    var formattedMessage = incomeMessage.toString().split(" ");

    if (formattedMessage[0] === 'ahoj') {
        (0, _messages.sendTextMessage)(sender, 'Kravina');
    } else {
        (0, _messages.sendTextMessage)(sender, 'Druha kravina');
    }
}
//# sourceMappingURL=transformator.js.map