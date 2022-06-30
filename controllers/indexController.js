const listaServicos = [{nome:"banho",valor:500},{nome:'tosa',valor:1000},{nome:'tosa',valor:1000},{nome:'higienica',valor:333},{nome:'limpeza',valor:3000}]



const indexController = {
    home:(req,res)=>{
        
    res.render('index',{servicos:listaServicos})
    }
}

module.exports = indexController