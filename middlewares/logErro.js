
function logErro(req,res, next){
    res.status(404).render('Voce digitou um endereço que não exite');
    next();
}

module.exports = logErro