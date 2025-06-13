import { Request, Response } from "express";
import { ListFornecedorUseCase } from "./ListFornecedorUseCase";
import { container } from "tsyringe";

class ListFornecedorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFornecedorUseCase = container.resolve(ListFornecedorUseCase);

    try {
      const produtos = await listFornecedorUseCase.execute();

      return response.status(200).send(produtos);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListFornecedorController };