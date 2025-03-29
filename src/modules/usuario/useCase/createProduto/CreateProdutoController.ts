import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";
import { container } from "tsyringe";

class CreateProdutoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome_produto, descricao, preco, quantidade_fornecedor, id_categoria } = request.body;
    const createProdutoUseCase = container.resolve(CreateProdutoUseCase);

    try {
      await createProdutoUseCase.execute({ nome_produto, descricao, preco, quantidade_fornecedor, id_categoria });

      return response.status(201).send({ nome_produto, descricao, preco, quantidade_fornecedor, id_categoria });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateProdutoController };
