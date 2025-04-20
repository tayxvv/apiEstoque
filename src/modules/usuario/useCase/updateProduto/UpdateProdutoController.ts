import { Request, Response } from "express";
import { UpdateProdutoUseCase } from "./UpdateProdutoUseCase";
import { container } from "tsyringe";

class UpdateProdutoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, nome_produto, descricao, preco, quantidade_fornecedor, id_categoria } = request.body;
    const updateProdutoUseCase = container.resolve(UpdateProdutoUseCase);

    try {
      await updateProdutoUseCase.execute(id, { nome_produto, descricao, preco, quantidade_fornecedor, id_categoria });

      return response.status(201).send({ nome_produto, descricao, preco, quantidade_fornecedor, id_categoria });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateProdutoController };
