import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';
import sslRedirect from 'heroku-ssl-redirect';
import cookieParser from 'cookie-parser';
import path from 'path';

import router from './router';
import { connectDB } from './models';
import { sigtermBE, sigtermFE } from './services/sigterm';

/**
 * Start Express server
 * 
 * Moonbot
 * version 2
 * 
 * Jan Blažej
 * Bachelor thesis
 * Vysoká škola ekonomická v Praze
 * 2019
 * 
 */
const app = express();

/**
 * Setup server
 * 
 */
app.use(sslRedirect());
app.use('/public', express.static(__dirname + '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(serveFavicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(router);

app.set('port', process.env.PORT || 3030);

/**
 * Run Express server
 * 
 */
app.listen(app.get('port'), () => {
	console.log('App is running on port %d in %s mode', app.get('port'), app.get('env'));
});

/**
 * Database connection
 * 
 */
connectDB();

/**
 * CRON services
 * 
 */
//sigtermBE()
//sigtermFE()

/**
 * HANDLINGS ERRORS
 * 
 */
let shuttingDown = false;

app.use((req, res, next) => {
	if (!shuttingDown) return next();

	res.setHeader('Connection', 'close');
	const err = new Error('Server is in the process of restarting');
	err.status = 503;
	next(err);
});

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	console.log(err);
	res.send({ error: err.message });
	if (app.get('env') === 'development') {
		console.log(err);
	}
});

export default app;
