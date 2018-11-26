'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNextIdos = undefined;

var sendNextIdos = exports.sendNextIdos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
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
            shiftedTimeAndDateUTC = (0, _dateAndTime.shiftTimeAndDateUTC)(utcTimeAndDate);
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

  return function sendNextIdos(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initializeIdosTable = initializeIdosTable;
exports.sendIdosAnswer = sendIdosAnswer;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _cheerioTableparser = require('cheerio-tableparser');

var _cheerioTableparser2 = _interopRequireDefault(_cheerioTableparser);

var _messages = require('../lib/messages');

var _dateAndTime = require('../lib/dateAndTime');

var _templates = require('../lib/templates');

var _user = require('../../services/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function initializeIdosTable(from, to, timeTravel, dateTravel) {
  var url = 'https://jizdnirady.idnes.cz/praha/spojeni/?f=' + from + '&t=' + to + '&time=' + timeTravel + '&date=' + dateTravel + '&submit=true';
  var result = [];

  return new Promise(function (resolve, reject) {
    (0, _requestPromise2.default)(url).then(function (html) {
      var parseHtml = _cheerio2.default.load(html, { decodeEntities: false, normalizeWhitespace: true });
      (0, _cheerioTableparser2.default)(parseHtml);

      // Parse data from Idos
      var data = parseHtml('table tbody').attr('class', 'results').first().parsetable(true, true, true);
      // 6 columns in 1 row

      for (var j = 0; j < data[2].length; j++) {
        var parseTable = [];

        for (var i = 2; i < data.length; i++) {
          parseTable.push(data[i][j]);
        }

        result.push(parseTable);
      }

      resolve(result);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function sendIdosAnswer(sender, text, utcTimeAndDate) {
  var stops = transformTextForIdos(text);

  var from = encodeUrlParameter(stops[0]);
  var to = encodeUrlParameter(stops[1]);

  var timeTravel = (0, _dateAndTime.getTime)(utcTimeAndDate);
  var dateTravel = (0, _dateAndTime.getDate)(utcTimeAndDate);

  (0, _messages.sendTextMessage)(sender, "Váš spoj se vyhledává...");

  var initializePromise = initializeIdosTable(from, to, timeTravel, dateTravel);
  initializePromise.then(function (result) {
    // Initialized table data
    var data = result;

    var i = 0;

    _async2.default.eachSeries(data, function (idosData, callback) {

      if (i === data.length - 1) {
        // Break out of async
        var err = new Error('Broke out of async');
        var pom = data.length;
        var splitInformation = [];
        splitInformation.push(data[pom - 1]);

        var extraInformation = splitInformation[0][0].split(",", 3).toString();
        extraInformation += " Kč";

        err.break = true;

        setTimeout(function () {
          (0, _messages.sendTextMessage)(sender, extraInformation);
        }, 500);
        setTimeout(function () {
          (0, _messages.sendGenMessage)(sender, _templates.templates['get_test']);
        }, 700);
        setTimeout(function () {
          (0, _user.modifyUserById)(sender, stops[0], stops[1], utcTimeAndDate);
        }, 900);

        return callback(err);
      }

      setTimeout(function () {
        var zastavka = idosData[0];
        var prijezd = idosData[1];
        var odjezd = idosData[2];
        var spoj = idosData[5];

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
  }, function (err) {
    var text = ['Něco se pokazilo. :-(', 'Příkaz je ve tvaru: Spoj odkud do kam'];
    (0, _messages.sendMultipleMessages)(sender, text);
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