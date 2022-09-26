const express = require('express')
const controller = require('../controller/cartController')
const router = express.Router()

router.post('/getTotal', controller.getTotalAmount);
module.exports = router