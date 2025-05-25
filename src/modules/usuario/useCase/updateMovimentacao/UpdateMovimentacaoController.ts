import { Request, Response } from "express";
import { UpdateMovimentacaoUseCase } from "./UpdateMovimentacaoUseCase";
import { container } from "tsyringe";

class UpdateMovimentacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { observacao, quantidade, data } = request.body;
    const updateMovimentacaoUseCase = container.resolve(UpdateMovimentacaoUseCase);

    try {
      await updateMovimentacaoUseCase.execute(id, { observacao, quantidade, data });

      return response.status(201).send({ observacao, quantidade, data });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateMovimentacaoController };
