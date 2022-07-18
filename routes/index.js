var express = require('express');
var router = express.Router();
const multer = require('multer');
const {body} = require('express-validator');
const multerDiskStorage = multer.diskStorage({});
const upload = multer({storage: multerDiskStorage});
const validacoes = [
    body('nome').notEmpty().isString(),
    body('valor').notEmpty().isNumeric(),
    body('email').notEmpty().isEmail()
];



const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const cadastroController = require('../controllers/cadastroController')
const servicoController = require('../controllers/servicoController')
const loginController = require('../controllers/loginController')
const sobreController = require('../controllers/sobreController')

router.get('/hello',petsController.hello)
router.get('/pets' , petsController.index)
router.get('/',indexController.home)
router.get('/create',indexController.create)
router.get('/cadastro',cadastroController.viewCadastro)
router.post('/cadastro',validacoes,upload.single('avatar'),indexController.salvarCadastro)
router.get('/servico',servicoController.home)
router.get('/login',loginController.home)
router.get('/sobre',sobreController.home)



module.exports = router;
