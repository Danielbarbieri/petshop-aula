const listaServicos = [{ nome: "banho", valor: 500 }, { nome: 'tosa', valor: 1000 }, { nome: 'tosa', valor: 1000 }, { nome: 'higienica', valor: 333 }, { nome: 'limpeza', valor: 3000 }]
const fs = require('fs')
const crud = {
    tabelaPreco: [],
    read() {
        return fs.readFileSync('./db.json', { encoding: 'utf-8' })
    },
    create({ id, content }) {
        const dados = { id, content };
        crud.tabelaPreco.push(dados);
        fs.writeFileSync('./db.json', JSON.stringify(crud.tabelaPreco), { encoding: 'utf-8' });
    }
}


const indexController = {
    home: (req, res) => {
        res.render('index', { servicos: listaServicos })
    },
    create: (req, res) => {
        console.log('aqui foi create')
    },
};
// create

// crud.create({ id: Date.now(), content: 'primeiro' });
// crud.create({ id: Date.now(), content: 'segundo' });
// crud.create({ id: Date.now(), content: 'terceiro' });
// crud.create({ id: Date.now(), content: 'quarto' });

// read

console.log('leitura do arquivo ');



module.exports = indexController