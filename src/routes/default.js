const routes = require('express').Router();
const ControllerCategories = require('../controllers/ControllerCategories');
const ControllerPosts = require('../controllers/ControllerPosts');

routes.get('/categorias/list', ControllerCategories.list)

routes.get('/postagens/list', ControllerPosts.list)

routes.get('/postagens/list/:id', ControllerPosts.listByCategory)

module.exports = routes;