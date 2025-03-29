import { Request, Response } from "express";
import { ListProdutoUseCase } from "./ListProdutoUseCase";
import { container } from "tsyringe";

class ListProdutoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProdutoUseCase = container.resolve(ListProdutoUseCase);

    try {
      const produtos = await listProdutoUseCase.execute();

      return response.status(200).send(produtos);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListProdutoController };
