import { Request, Response } from "express";
import { CreateMovimentacaoUseCase } from "./CreateMovimentacaoUseCase";
import { container } from "tsyringe";

class CreateMovimentacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { observacao, quantidade, data, id_produto, id_tipo_movimentacao } = request.body;
    const createMovimentacaoUseCase = container.resolve(CreateMovimentacaoUseCase);

    try {
      await createMovimentacaoUseCase.execute({ observacao, quantidade, data, id_produto, id_tipo_movimentacao });

      return response.status(201).send({ observacao, quantidade, data, id_produto, id_tipo_movimentacao });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateMovimentacaoController };
