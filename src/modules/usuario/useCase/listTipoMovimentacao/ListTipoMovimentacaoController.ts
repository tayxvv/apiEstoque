import { Request, Response } from "express";
import { ListTipoMovimentacaoUseCase } from "./ListTipoMovimentacaoUseCase";
import { container } from "tsyringe";

class ListTipoMovimentacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const lisTipoMovimentacaoUseCase = container.resolve(ListTipoMovimentacaoUseCase);

    try {
      const tipoMovimentacoes = await lisTipoMovimentacaoUseCase.execute();

      return response.status(200).send(tipoMovimentacoes);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTipoMovimentacaoController };
