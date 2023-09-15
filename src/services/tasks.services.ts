import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/appError";
import {
  TTaskRequest,
  TTaskResponse,
  TTaskUpdate,
  TTasksResponse,
} from "../interfaces/tasks.interfaces";
import { taskSchema, taskSchemaResponse } from "../schemas/tasks.schema";

export class TaskServices {
  async create(data: TTaskRequest, userId: string): Promise<TTaskResponse> {
    const taskRepository = AppDataSource.getRepository(Task);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: userId,
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const task = taskRepository.create({
      ...data,
      user,
    });

    await taskRepository.save(task);

    return taskSchema.parse(task);
  }

  async list(userId: string): Promise<TTasksResponse> {
    const taskRepository = AppDataSource.getRepository(Task);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: userId,
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const tasks = await taskRepository.find({
      where: {
        user: user,
      },
    });

    return taskSchemaResponse.parse(tasks);
  }

  async update(data: TTaskUpdate, taskId: string): Promise<TTaskResponse> {
    const taskRepository = AppDataSource.getRepository(Task);
    const oldTask = await taskRepository.findOneBy({
      id: taskId,
    });

    if (!oldTask) {
      throw new AppError("Task not found", 404);
    }

    const newTaskData = taskRepository.create({
      ...oldTask,
      ...data,
    });

    await taskRepository.save(newTaskData);

    return taskSchema.parse(newTaskData);
  }

  async remove(taskId: string) {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOneBy({
      id: taskId,
    });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    await taskRepository.remove(task);
  }
}
