import { SessionService } from "../services/session.service";
import { TaskServices } from "../services/tasks.services";
import { UserServices } from "../services/users.services";
import { SessionController } from "./session.controller";
import { TasksController } from "./tasks.controllers";
import { UsersController } from "./users.controllers";

const userServices = new UserServices();
const sessionService = new SessionService();
const tasksService = new TaskServices();
const usersController = new UsersController(userServices);
const sessionController = new SessionController(sessionService);
const tasksController = new TasksController(tasksService);

export { usersController, sessionController, tasksController };
