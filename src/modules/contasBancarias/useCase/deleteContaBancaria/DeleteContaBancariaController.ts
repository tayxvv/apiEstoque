import { Request, Response } from "express";
import { DeleteContaBancariaUseCase } from "./DeleteContaBancariaUseCase";
import { container } from "tsyringe";

class DeleteContaBancariaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteContaBancariaUseCase = container.resolve(
      DeleteContaBancariaUseCase
    );

    try {
      await deleteContaBancariaUseCase.execute({
        id,
      });

      return response.status(201).send({ Message: "Deletado com sucesso!" });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { DeleteContaBancariaController };
