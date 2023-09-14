import { SessionService } from "../services/session.service";
import { UserServices } from "../services/users.services";
import { SessionController } from "./session.controller";
import { UsersController } from "./users.controllers";

const userServices = new UserServices();
const sessionService = new SessionService();
const usersController = new UsersController(userServices);
const sessionController = new SessionController(sessionService);

export { usersController, sessionController };
