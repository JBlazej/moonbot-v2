'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTimeAndDateNow = getTimeAndDateNow;
exports.getTime = getTime;
exports.getDate = getDate;
exports.getYear = getYear;
exports.shiftTimeAndDateUTC = shiftTimeAndDateUTC;
exports.increaseTime = increaseTime;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _constant = require('../../conf/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTimeAndDateNow(utc) {
    var newDate = utc ? utc : new Date();

    var time = getTime(newDate);
    var date = getDate(newDate);
    var year = getYear(newDate);

    var set = getByHourIdosSettings(newDate);

    return {
        utc: newDate,
        time: time,
        date: date,
        year: year,
        set: set
    };
}

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

function getYear(utcTimeAndDate) {
    var actualYear = (0, _moment2.default)(utcTimeAndDate).format('YYYY');

    return actualYear;
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
        var minutesWeekend = getByHourIdosSettings(utcTimeAndDate, 5);

        return minutesWeekend.idosConstant;
    } else {
        var minutes = getByHourIdosSettings(utcTimeAndDate);

        return minutes.idosConstant;
    }
}

function getByHourIdosSettings(utcTimeAndDate, a) {
    var hour = (0, _moment2.default)(utcTimeAndDate).format('H');
    var set = _constant.incrementTimeMinutes;

    if (hour === 0) {
        return {
            partOfDay: 'půlnoc',
            idosConstant: a ? a + set.midnight : set.midnight
        };
    }

    if (1 <= hour && hour < 9) {
        return {
            partOfDay: 'ráno',
            idosConstant: a ? a + set.morning : set.morning
        };
    }

    if (9 <= hour && hour < 12) {
        return {
            partOfDay: 'dopoledne',
            idosConstant: a ? a + set.morning : set.morning
        };
    }

    if (12 <= hour && hour < 17) {
        return {
            partOfDay: 'odpoledne',
            idosConstant: a ? a + set.afternoon : set.afternoon
        };
    }

    if (17 <= hour && hour < 20) {
        return {
            partOfDay: 'podvečer',
            idosConstant: a ? a + set.early_evening : set.early_evening
        };
    }

    if (20 <= hour && hour < 24) {
        return {
            partOfDay: 'večer',
            idosConstant: a ? a + set.evening : set.evening
        };
    }
}
//# sourceMappingURL=dateAndTime.js.map