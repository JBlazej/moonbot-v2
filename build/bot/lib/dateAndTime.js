'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTime = getTime;
exports.getDate = getDate;
exports.shiftTimeAndDateUTC = shiftTimeAndDateUTC;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTime(utcTimeAndDate) {
    var actualTime = (0, _moment2.default)(utcTimeAndDate);
    var shiftedTime = actualTime.add(1, 'hours');
    var formatedTime = shiftedTime.format('HH:mm');

    return formatedTime;
}

function getDate(utcTimeAndDate) {
    var actualDate = (0, _moment2.default)(utcTimeAndDate).format('D.M.YYYY');

    return actualDate;
}

function shiftTimeAndDateUTC(utcTimeAndDate) {
    var actualTimeAndDateUTC = (0, _moment2.default)(utcTimeAndDate);
    var shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(10, 'minutes');

    return shiftedTimeAndDateUTC;
}
//# sourceMappingURL=dateAndTime.js.map