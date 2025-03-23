import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AppError } from "../../../../shared/errors/AppError";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const token = await authenticateUserUseCase.execute(username, password);
      return response.json({ token });
    } catch (error) {
      if (error instanceof AppError) {
        return response.json({ error: error });
      }
      console.error(error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export { AuthenticateUserController };
