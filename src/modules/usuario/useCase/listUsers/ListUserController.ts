import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";
import { container } from "tsyringe";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUserUseCase);

    try {
      const users = await listUserUseCase.execute();

      return response.status(201).send(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListUserController };
