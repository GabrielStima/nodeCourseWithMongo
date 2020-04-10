const routes = require('express').Router();
const ControllerCategories = require('../controllers/ControllerCategories');
const ControllerPosts = require('../controllers/ControllerPosts');
const ControllerUsers = require('../controllers/ControllerUsers');

routes.post('/categorias/add', ControllerCategories.create)

routes.put('/categorias/edit/:id', ControllerCategories.update)

routes.delete('/categorias/delete/:id', ControllerCategories.delete)

routes.post('/postagens/add', ControllerPosts.create)

routes.put('/postagens/edit/:id', ControllerPosts.update)

routes.delete('/postagens/delete/:id', ControllerPosts.delete)

routes.get('/usuarios/list',ControllerUsers.list)

routes.post('/usuarios/add',ControllerUsers.create)

routes.put('/usuarios/edit/:id',ControllerUsers.update)

routes.delete('/usuarios/delete/:id',ControllerUsers.delete)

module.exports = routes;