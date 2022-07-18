const loginController = {
    home:(req,res)=>{
        
    res.render('login')
    },
    logarUsuario:(req,res)=>{
        let {email,senha, logado} = req.body;
        let usuarioSalvo = JSON.parse(usuarioSalvo);

        if(email != usuarioSalvo.email){
            return res.send('Usuario Invalido!')
        }

        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.send('Senha Invalida!');
        }
        req.session.usuario = usuarioSalvo

        res.redirect('/produtos')
    }
}

module.exports = loginController