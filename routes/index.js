var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')

router.get('/hello',petsController.hello)
router.get('/pets' , petsController.index)
router.get('/home',indexController.home)

module.exports = router;
