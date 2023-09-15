import { Request, Response } from "express";
import { TaskServices } from "../services/tasks.services";

export class TasksController {
  constructor(private tasksService: TaskServices) {}

  async create(request: Request, response: Response) {
    const userId = response.locals.userId;

    const newTask = await this.tasksService.create(request.body, userId);

    return response.status(201).json(newTask);
  }

  async list(request: Request, response: Response) {
    const userId = response.locals.userId;

    const tasks = await this.tasksService.list(userId);

    return response.json(tasks);
  }

  async update(request: Request, response: Response) {
    const tasksId = request.params.id;
    const updateTask = await this.tasksService.update(request.body, tasksId);

    return response.json(updateTask);
  }

  async remove(request: Request, response: Response) {
    const tasksId = request.params.id;
    await this.tasksService.remove(tasksId);

    return response.status(204).send();
  }
}
