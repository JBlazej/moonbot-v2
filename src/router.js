import {Router} from 'express'
import requireDir from 'require-dir'
import path from 'path'

const router = Router()

// HOME
router.get('/', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

// FACEBOOK VERIFICATION
// -----------------------------------------------------------------------------
router.get('/facebook-webhook', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

// INCOME POST DATA FROM FACEBOOK
// -----------------------------------------------------------------------------
router.post('/facebook-webhook', (req, res) => {
    res.status(200).json({good: 'Nice'})
})

export default router
