const ProdutoController ={
    viewForm:(req,res)=>{
        return res.render('produtos'); 
    },
    salvarForm: (req, res) => {
        let {nomeProduto, precoProduto} = req.body;
        res.redirect('/produtos/sucesso')
    },
    sucesso: (req, res) => {
        res.render('sucesso')
    }
};

module.exports = ProdutoController