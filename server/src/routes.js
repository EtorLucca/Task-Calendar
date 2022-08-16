import { Router } from "express";

import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import TasksController from "./controllers/TasksController";
import auth from "./middlewares/auth"

const routes = new Router();

//----------Controller Público--------------
routes.post('/sessions', SessionsController.create);
routes.post("/users", UsersController.create);

//----------Middleware----------------------

routes.use(auth);

//----------Controllers privados------------
routes.get("/users/:id", UsersController.show);

routes.get("/users", UsersController.index);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

routes.get("/tasks/:user_id", TasksController.index);
routes.post("/tasks/:user_id", TasksController.create);
routes.show("/tasks/:user_id/:id", TasksController.show);
routes.put("/tasks/:user_id/:id", TasksController.update);
routes.delete("/tasks/:user_id/:id", TasksController.destroy);

export default routes;
