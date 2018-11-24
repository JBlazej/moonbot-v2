'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var parseTable = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(html) {
    var parseHtml, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parseHtml = _cheerio2.default.load(html, { decodeEntities: false, normalizeWhitespace: true });

            (0, _cheerioTableparser2.default)(parseHtml);

            data = parseHtml('table tbody').attr('class', 'results').first().parsetable(true, true, true);
            return _context.abrupt('return', data);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function parseTable(_x) {
    return _ref.apply(this, arguments);
  };
}();

var modifyParseHtml = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(html) {
    var data, result, j, _parseTable, i;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = html;
            result = [];


            for (j = 0; j < data[2].length; j++) {
              _parseTable = [];


              for (i = 2; i < data.length; i++) {
                _parseTable.push(data[i][j]);
              }

              result.push(_parseTable);
            }

            return _context2.abrupt('return', result);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function modifyParseHtml(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var makeIdosRequest = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(from, to, timeTravel, dateTravel) {
    var url;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = 'https://jizdnirady.idnes.cz/praha/spojeni/?f=' + from + '&t=' + to + '&time=' + timeTravel + '&date=' + dateTravel + '&submit=true';

            (0, _requestPromise2.default)(url).then(function (html) {
              console.log(html);
              return html;
            });

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function makeIdosRequest(_x3, _x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

makeIdosRequest('husinecka', 'volha', '21:30', '23.11.2018');

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
        var _parseTable2 = [];

        for (var i = 2; i < data.length; i++) {
          _parseTable2.push(data[i][j]);
        }

        result.push(_parseTable2);
      }
      resolve(result);
      console.log(result);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

//initializeIdosTable('husinecka', 'volha', '10:30', '22.11.2018')

function sendIdosAnswer(sender, text, timeTravel, dateTravel) {
  var stops = transformTextForIdos(text);

  var from = encodeUrlParameter(stops[0]);
  var to = encodeUrlParameter(stops[1]);

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

        //setTimeout(()=>{sendTextMessage(sender, extraInformation)}, 500)
        //setTimeout(()=>{sendGenMessage(sender, mTemplate.templates['get_test'])}, 700)
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
          //console.log(message)
        } else {
          var message2 = zastavka + ' ' + prijezd + ' ' + odjezd + spoj;
          (0, _messages.sendTextMessage)(sender, message2);
          //console.log(message2)
        }

        i++;

        callback();
      }, 800);
    });
  }, function (err) {
    (0, _messages.sendTextMessage)(sender, "Něco se pokazilo zkus to znovu :-(");
  });
}

function isEven(value) {
  if (value % 2 == 0) return true;else return false;
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