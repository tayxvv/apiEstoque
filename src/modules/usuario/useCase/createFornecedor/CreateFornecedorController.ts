import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFornecedorUseCase } from "./CreateFornecedorUseCase";

class CreateFornecedorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      email,
      telefone,
      rua,
      bairro,
      quadra,
      numero
    } = request.body;

    const createFornecedorUseCase = container.resolve(CreateFornecedorUseCase);

    try {
      const fornecedor = await createFornecedorUseCase.execute({
        nome,
        email,
        telefone,
        rua,
        bairro,
        quadra,
        numero
      });

      return response.status(201).json(fornecedor);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateFornecedorController };