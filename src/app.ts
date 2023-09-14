import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRouter } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use(handleAppErrorMiddleware);

export default app;
