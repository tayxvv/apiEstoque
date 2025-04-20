import { Request, Response } from "express";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";
import { container } from "tsyringe";

class DeleteProdutoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProdutoUseCase = container.resolve(DeleteProdutoUseCase);

    try {
      await deleteProdutoUseCase.execute(id);

      return response.status(201).json('Produto deletado com sucesso!');
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { DeleteProdutoController };
