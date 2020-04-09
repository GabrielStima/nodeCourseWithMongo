const routes = require('express').Router();
const ControllerCategorias = require('../controllers/ControllerCategorias');
const ControllerPostagens = require('../controllers/ControllerPostagens');

routes.get('/categorias/list', ControllerCategorias.list)

routes.post('/categorias/add', ControllerCategorias.create)

routes.put('/categorias/edit/:id', ControllerCategorias.update)

routes.delete('/categorias/delete/:id', ControllerCategorias.delete)

routes.get('/postagens/list', ControllerPostagens.list)

routes.post('/postagens/add', ControllerPostagens.create)

routes.put('/postagens/edit/:id', ControllerPostagens.update)

routes.delete('/postagens/delete/:id', ControllerPostagens.delete)


module.exports = routes;