import {Router} from 'express'
import path from 'path'
import requireDir from 'require-dir'

const controller = requireDir('./controllers')

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
const wrap = fn => (...args) => fn(...args).catch(args[2])

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/facebook-webhook', wrap(controller.facebookVerificationHook))

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/facebook-webhook', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

export default router
