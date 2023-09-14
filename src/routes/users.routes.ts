import { Router } from "express";
import { usersController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRouter = Router();
usersRouter.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  (request, response) => {
    usersController.create(request, response);
  }
);

export { usersRouter };
