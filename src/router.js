import { Router } from 'express';
import requireDir from 'require-dir';

const controller = requireDir('./controllers');

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
const wrap = (fn) => (...args) => fn(...args).catch(args[2]);

const router = Router();

// HOME
router.get('/', (req, res) => {
	res.send('Server is working !!!');
});

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/facebook-webhook', wrap(controller.facebook.facebookVerificationHook));

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/facebook-webhook', wrap(controller.facebook.facebookEventHook));

export default router;
