import { z } from "zod";
import {
  taskSchema,
  taskSchemaRequest,
  taskSchemaResponse,
  taskSchemaUpdate,
} from "../schemas/tasks.schema";

type TTask = z.infer<typeof taskSchema>;
type TTaskRequest = z.infer<typeof taskSchemaRequest>;
type TTaskUpdate = z.infer<typeof taskSchemaUpdate>;
type TTaskResponse = z.infer<typeof taskSchema>;
type TTasksResponse = z.infer<typeof taskSchemaResponse>;

export { TTask, TTaskRequest, TTaskUpdate, TTaskResponse, TTasksResponse };
