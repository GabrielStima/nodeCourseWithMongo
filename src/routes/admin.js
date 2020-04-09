const routes = require('express').Router();
const ControllerCategorias = require('../controllers/ControllerCategorias');

routes.get('/categorias/list', ControllerCategorias.list)

routes.post('/categorias/add', ControllerCategorias.create)

module.exports = routes;