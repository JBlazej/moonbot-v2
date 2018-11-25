'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTime = getTime;
exports.getDate = getDate;
exports.shiftTimeAndDateUTC = shiftTimeAndDateUTC;
exports.increaseTime = increaseTime;
exports.getTimeAndDateNow = getTimeAndDateNow;

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
    var increaseForMinutes = increaseTime(utcTimeAndDate);

    var shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(increaseForMinutes, 'minutes');

    return shiftedTimeAndDateUTC;
}

function increaseTime(utcTimeAndDate) {
    var day = (0, _moment2.default)(utcTimeAndDate).format('dddd');
    if (day === 'Saturday' || day === 'Sunday') {
        return 12;
    } else {
        return 6;
    }
}

// Return object
function getTimeAndDateNow() {
    var newDate = new Date();
    var time = getTime(newDate).toString();
    var date = getDate(newDate).toString();

    return {
        time: time,
        date: date
    };
}

var help = getTimeAndDateNow();
console.log(help.time);
//# sourceMappingURL=dateAndTime.js.map