const cadastroController = {
    viewCadastro: (req, res) => {
        return res.render('index');
    },
    salvarCadastro: (req, res) => {
        return res.send('cadastro');

    }
};

module.exports = cadastroController