import { Request, Response } from "express";
import { UserServices } from "../services/users.services";

export class UsersController {
  constructor(private userService: UserServices) {}
  async create(request: Request, response: Response) {
    const newUser = await this.userService.create(request.body);

    return response.status(201).json(newUser);
  }
}
