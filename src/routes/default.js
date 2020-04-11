const routes = require("express").Router();
const CategoriesController = require("../controllers/CategoriesController");
const PostsController = require("../controllers/PostsController");

routes.get("/categorias", CategoriesController.list);

routes.get("/postagens", PostsController.list);

routes.get("/postagens/:id", PostsController.listByCategory);

module.exports = routes;
