'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNextIdos = undefined;

var sendNextIdos = exports.sendNextIdos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, shift) {
    var pole, text, utcTimeAndDate, shiftedTimeAndDateUTC;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _user.getUserById)(id);

          case 2:
            pole = _context.sent;

            if (!pole) {
              _context.next = 10;
              break;
            }

            text = 'spoj ' + pole[0].station.from + ' do ' + pole[0].station.to;
            utcTimeAndDate = pole[0].station.time;
            shiftedTimeAndDateUTC = (0, _dateAndTime.shiftTimeAndDateUTC)(utcTimeAndDate, shift);
            return _context.abrupt('return', sendIdosAnswer(id, text, shiftedTimeAndDateUTC));

          case 10:
            (0, _messages.sendTextMessage)(id, "Něco se pokazilo zkus to znovu :-(");

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendNextIdos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendIdosAnswer = sendIdosAnswer;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _tabletojson = require('tabletojson');

var _tabletojson2 = _interopRequireDefault(_tabletojson);

var _messages = require('../lib/messages');

var _dateAndTime = require('../lib/dateAndTime');

var _templates = require('../lib/templates');

var _answers = require('../lib/answers');

var _user = require('../../services/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getDataFromIdos(from, to, timeTravel, dateTravel) {
  var url = 'https://jizdnirady.idnes.cz/praha/spojeni/?f=' + from + '&t=' + to + '&time=' + timeTravel + '&date=' + dateTravel + '&submit=true';

  return new Promise(function (resolve) {
    _tabletojson2.default.convertUrl(url, function (tablesAsJson) {
      resolve(tablesAsJson[1]);
    });
  });
}

function sendIdosAnswer(sender, text, utcTimeAndDate) {
  var stops = transformTextForIdos(text);

  var from = encodeUrlParameter(stops[0]);
  var to = encodeUrlParameter(stops[1]);

  var timeTravel = (0, _dateAndTime.getTime)(utcTimeAndDate);
  var dateTravel = (0, _dateAndTime.getDate)(utcTimeAndDate);

  var initializePromise = getDataFromIdos(from, to, timeTravel, dateTravel);
  initializePromise.then(function (result) {
    var data = result ? result : null;

    if (data === null) {
      (0, _messages.sendMultipleMessages)(sender, _answers.errorIDOS);
    } else {
      (0, _messages.sendMultipleMessages)(sender, _answers.loadingIDOS);
    }
    var i = 0;

    _async2.default.eachSeries(data, function (idosData, callback) {
      if (i === data.length - 1) {
        // Break out of async
        var err = new Error('Broke out of async');
        var pom = data.length;
        var splitInformation = [];
        splitInformation.push(data[pom - 1]);

        var extraInformation = splitInformation[0]['Odkud/Přestup/Kam'].split(",", 1).toString();

        err.break = true;

        setTimeout(function () {
          (0, _messages.sendTextMessage)(sender, extraInformation);
        }, 500);
        setTimeout(function () {
          (0, _messages.sendGenMessage)(sender, _templates.templates['get_next_idos']);
        }, 700);
        setTimeout(function () {
          (0, _user.modifyUserById)(sender, stops[0], stops[1], utcTimeAndDate);
        }, 900);

        return callback(err);
      }

      setTimeout(function () {
        var zastavka = idosData['Odkud/Přestup/Kam'];
        var prijezd = idosData['Příj.'];
        var odjezd = idosData['Odj.'];
        var spoj = idosData['6'];

        if (odjezd.length === 0 || odjezd.length === 1) {
          odjezd = 'příjezd';
        }
        if (prijezd.length === 0 || prijezd.length === 1) {
          prijezd = 'odjezd';
        }
        if (spoj.length === 3) {
          spoj = ', autobusem č. ' + spoj;
        }

        if (spoj === 'A' || spoj === 'B' || spoj === 'C') {
          spoj = ', metro ' + spoj;
        }

        if (spoj.length === 2 || spoj.length === 1) {
          spoj = ', tramvají č. ' + spoj;
        }

        if (spoj.charAt(0) === 'P') {
          spoj = ', ' + spoj.toLowerCase();
        }

        var val = isEven(i);

        if (val === false) {
          var message = zastavka + ' ' + odjezd + ' ' + prijezd + spoj;
          (0, _messages.sendTextMessage)(sender, message);
        } else {
          var message2 = zastavka + ' ' + prijezd + ' ' + odjezd + spoj;
          (0, _messages.sendTextMessage)(sender, message2);
        }

        i++;
        callback();
      }, 800);
    });
  });
}

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function transformTextForIdos(text) {
  var onlyConnections = text.replace("spoj ", "");
  var stops = onlyConnections.split(" do ");

  return stops;
}

function encodeUrlParameter(value) {
  return encodeURIComponent(value).replace(/\%20/g, '+');
}
//# sourceMappingURL=index.js.map