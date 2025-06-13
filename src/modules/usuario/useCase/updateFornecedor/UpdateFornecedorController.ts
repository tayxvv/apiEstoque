import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFornecedorUseCase } from "./UpdateFornecedorUseCase";

class UpdateFornecedorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, email, telefone, endereco } = request.body;

    const updateFornecedorUseCase = container.resolve(UpdateFornecedorUseCase);

    try {
      await updateFornecedorUseCase.execute(id, { nome, email, telefone, endereco });

      return response.status(201).send({ nome, email, telefone, endereco });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateFornecedorController };