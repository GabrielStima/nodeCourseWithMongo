const routes = require("express").Router();
const CategoriesController = require("./controllers/CategoriesController");
const PostsController = require("./controllers/PostsController");
const UsersController = require("./controllers/UsersController");

routes.get("/categorias", CategoriesController.list);

routes.post("/categorias", CategoriesController.create);

routes.put("/categorias/:id", CategoriesController.update);

routes.delete("/categorias/:id", CategoriesController.delete);

routes.get("/postagens", PostsController.list);

routes.get("/postagens/:id", PostsController.listByCategory);

routes.post("/postagens", PostsController.create);

routes.put("/postagens/:id", PostsController.update);

routes.delete("/postagens/:id", PostsController.delete);

routes.get("/usuarios", UsersController.list);

routes.post("/usuarios", UsersController.create);

routes.put("/usuarios/:id", UsersController.update);

routes.delete("/usuarios/:id", UsersController.delete);

module.exports = routes;
