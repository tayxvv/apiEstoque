import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFornecedorUseCase } from "./UpdateFornecedorUseCase";

class UpdateFornecedorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      nome,
      email,
      telefone,
      rua,
      bairro,
      quadra,
      numero
    } = request.body;

    const updateFornecedorUseCase = container.resolve(UpdateFornecedorUseCase);

    try {
      await updateFornecedorUseCase.execute(id, {
        nome,
        email,
        telefone,
        rua,
        bairro,
        quadra,
        numero
      });

      return response.status(201).send({
        nome,
        email,
        telefone,
        rua,
        bairro,
        quadra,
        numero
      });
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateFornecedorController };