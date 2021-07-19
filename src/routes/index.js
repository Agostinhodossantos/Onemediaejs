const { Router } = require('express')
const router = Router()
const routerController = require('../controllers/router.controller')

router.get('/', routerController.home)
router.get('/request/:id', routerController.request)
router.get('/request_web', routerController.request_web)

module.exports = router