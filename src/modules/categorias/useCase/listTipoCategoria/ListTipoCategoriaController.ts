import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTipoCategoriaUseCase } from "./ListTipoCategoriaUseCase";

class ListTipoCategoriaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTipoContaUseCase = container.resolve(ListTipoCategoriaUseCase);

    try {
      const tiposCategorias = await listTipoContaUseCase.execute();

      return response.status(200).send({ tiposCategorias });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTipoCategoriaController };
