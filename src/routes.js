const {Router} = require('express')

const routes = new Router();

routes.get('/home', (req, res)=>{
    res.send({Mensagem: 'Conectado com sucesso!'})
})

module.exports = routes