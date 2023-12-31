import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRouter } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { sessionRouter } from "./routes/session.routes";
import { tasksRoutes } from "./routes/tasks.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/tasks", tasksRoutes);

app.use(handleAppErrorMiddleware);

export default app;
