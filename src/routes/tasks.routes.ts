import { Router, request, response } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schema";
import { tasksController } from "../controllers";

const tasksRoutes = Router();

tasksRoutes.use(ensureAuthMiddleware);
tasksRoutes.post(
  "",
  ensureDataIsValidMiddleware(taskSchemaRequest),
  (request, response) => tasksController.create(request, response)
);
tasksRoutes.get("", (request, response) =>
  tasksController.list(request, response)
);
tasksRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(taskSchemaUpdate),
  (request, response) => tasksController.update(request, response)
);
tasksRoutes.delete("/:id", (request, response) =>
  tasksController.remove(request, response)
);

export { tasksRoutes };
