import { UserServices } from "../services/users.services";
import { UsersController } from "./users.controllers";

const userServices = new UserServices();
const usersController = new UsersController(userServices);

export { usersController };
