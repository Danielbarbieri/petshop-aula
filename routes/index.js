var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const cadastroController = require('../controllers/cadastroController')
const servicoController = require('../controllers/servicoController')
const loginController = require('../controllers/loginController')
const sobreController = require('../controllers/sobreController')

router.get('/hello',petsController.hello)
router.get('/pets' , petsController.index)
router.get('/',indexController.home)
router.get('/cadastro',cadastroController.cadastro)
router.get('/servico',servicoController.home)
router.get('/login',loginController.home)
router.get('/sobre',sobreController.home)


module.exports = router;
