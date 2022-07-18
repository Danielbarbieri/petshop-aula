let express = require('express');
let router = express.Router();


let produtoController = require('../controllers/produtoController');

router.get('/criar', produtoController.viewForm);
router.get('/sucesso', produtoController.sucesso);
router.post('/criar', produtoController.salvarForm);

module.exports = router;
