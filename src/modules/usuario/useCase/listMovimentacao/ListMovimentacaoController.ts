import { Request, Response } from "express";
import { ListMovimentacaoUseCase } from "./ListMovimentacaoUseCase";
import { container } from "tsyringe";

class ListMovimentacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMovimentacaoUseCase = container.resolve(ListMovimentacaoUseCase);

    try {
      const movimentacoes = await listMovimentacaoUseCase.execute();

      return response.status(200).send(movimentacoes);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListMovimentacaoController };
