'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      console.log(result);
    }).catch(function (err) {
      return reject(err);
    });
  });
}

//initializeIdosTable('husinecka', 'volha', '10:30', '22.11.2018')

function sendIdosAnswer(a, b, c, d) {
  var initializePromise = initializeIdosTable(a, b, c, d);
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
          //sendTextMessage(sender, message);
          console.log(message);
        } else {
          var message2 = zastavka + ' ' + prijezd + ' ' + odjezd + spoj;
          //sendTextMessage(sender, message2);
          console.log(message2);
        }

        i++;

        callback();
      }, 800);
    });
  }, function (err) {
    sendTextMessage(sender, "Něco se pokazilo zkus to znovu :-(");
  });
}

function isEven(value) {
  if (value % 2 == 0) return true;else return false;
}
//# sourceMappingURL=idos.js.map