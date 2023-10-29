import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTipoContaUseCase } from "./ListTipoContaUseCase";

class ListTipoContaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTipoContaUseCase = container.resolve(ListTipoContaUseCase);

    try {
      const tiposContas = await listTipoContaUseCase.execute();

      return response.status(200).send({ tiposContas });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTipoContaController };
