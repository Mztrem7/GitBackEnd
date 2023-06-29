const express = require('express');
const Controller = require('./Controllers/Controller');
const routes = express.Router();

routes.get('/', Controller.Home)
routes.get('/produtos', Controller.Produtos)
routes.get('/SobreNos', Controller.SobreNos)
routes.get('/Contatos', Controller.Contatos)
routes.get('/SeusPedidos', Controller.SeusPedidos)

module.exports = routes