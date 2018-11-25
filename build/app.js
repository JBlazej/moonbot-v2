'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _herokuSslRedirect = require('heroku-ssl-redirect');

var _herokuSslRedirect2 = _interopRequireDefault(_herokuSslRedirect);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _models = require('./models');

var _sigterm = require('./services/sigterm');

var _hacker = require('./bot/hacker');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Start Express server.
 */
var app = (0, _express2.default)();
/**
 * Setup Express server.
 */
// HEROKU SIGTERM
(0, _sigterm.sigterm)();
// SSL
app.use((0, _herokuSslRedirect2.default)());
// PUBLIC
app.use('/public', _express2.default.static(__dirname + '../public'));
// BODY
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// COOKIE
app.use((0, _cookieParser2.default)());
// FAV
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../public', 'favicon.ico')));
// ROUTER
app.use(_router2.default);
// PORT
app.set('port', process.env.PORT || 3030);

// DB
(0, _models.connectDB)();

/**
 * Run Express server.
 */
app.listen(app.get("port"), function () {
    console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("Press CMD-C to stop\n");
});

var help = ['18503854', '18503060', '18508693'];
var gg = (0, _hacker.parseRequest)(help);

console.log(typeof gg === 'undefined' ? 'undefined' : _typeof(gg));
console.log(gg);

// HANDLINGS ERRORS
var shuttingDown = false;

app.use(function (req, res, next) {
    if (!shuttingDown) return next();

    res.setHeader('Connection', 'close');
    var err = new Error('Server is in the process of restarting');
    err.status = 503;
    next(err);
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.send({ 'error': err.message });
    if (app.get('env') === 'development') {
        console.log(err);
    }
});

exports.default = app;
//# sourceMappingURL=app.js.map