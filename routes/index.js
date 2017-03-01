'use strict'

var express = require('express')
var router = express.Router()
const controllers = require('../controllers/bookController.js')

/* GET home page. */
router.get('/', controllers.seedBooks)

module.exports = router
