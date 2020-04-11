const routes = require("express").Router();
const PostsController = require("./controllers/PostsController");
const UsersController = require("./controllers/UsersController");
const LoginController = require("./controllers/LoginController");
const authenticateToken = require("./middleware/authenticateToken");
const CategoriesController = require("./controllers/CategoriesController");

routes.get("/categorias", CategoriesController.list);

routes.post(
  "/categorias",
  authenticateToken.verifyToken,
  CategoriesController.create
);

routes.put(
  "/categorias/:id",
  authenticateToken.verifyToken,
  CategoriesController.update
);

routes.delete(
  "/categorias/:id",
  authenticateToken.verifyToken,
  CategoriesController.delete
);

routes.get("/postagens", PostsController.list);

routes.get("/postagens/:id", PostsController.listByCategory);

routes.post(
  "/postagens",
  authenticateToken.verifyToken,
  PostsController.create
);

routes.put(
  "/postagens/:id",
  authenticateToken.verifyToken,
  PostsController.update
);

routes.delete(
  "/postagens/:id",
  authenticateToken.verifyToken,
  PostsController.delete
);

routes.get("/usuarios", authenticateToken.verifyToken, UsersController.list);

routes.post("/usuarios", authenticateToken.verifyToken, UsersController.create);

routes.put(
  "/usuarios/:id",
  authenticateToken.verifyToken,
  UsersController.update
);

routes.delete(
  "/usuarios/:id",
  authenticateToken.verifyToken,
  UsersController.delete
);

routes.post("/login", LoginController.authenticate);

module.exports = routes;
