import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTipoTransferenciaUseCase } from "./ListTipoTransferenciaUseCase";

class ListTipoTransferenciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTipoTransacaoUseCase = container.resolve(
      ListTipoTransferenciaUseCase
    );

    try {
      const tiposTransacoes = await listTipoTransacaoUseCase.execute();

      return response.status(200).send({ tiposTransacoes });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTipoTransferenciaController };
