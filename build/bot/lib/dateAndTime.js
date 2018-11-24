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

function getTime(utcDate) {
    var actualTime = (0, _moment2.default)(utcDate);
    var shiftedTime = actualTime.add(1, 'hours');
    var formatedTime = shiftedTime.format('HH:mm');

    return formatedTime;
}

function getDate(utcDate) {
    var actualDate = (0, _moment2.default)(utcDate).format('D.M.YYYY');

    return actualDate;
}

function shiftTimeAndDateUTC(utcTimeAndDate) {
    var actualTimeAndDateUTC = (0, _moment2.default)(utcTimeAndDate);
    var shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(10, 'minutes');

    return shiftedTimeAndDateUTC;
}

//2018-11-24T15:52:36.230Z
var xx = new Date();
var help = shiftTimeAndDateUTC(xx);

var dobros = getTime(help);

console.log(dobros);
//# sourceMappingURL=dateAndTime.js.map