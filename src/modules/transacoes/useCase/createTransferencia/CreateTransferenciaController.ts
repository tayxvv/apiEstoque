import { Request, Response } from "express";
import { CreateTransferenciaUseCase } from "./CreateTransferenciaUseCase";
import { container } from "tsyringe";

class CreateTransferenciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      valor,
      descricao,
      id_tipo_transacao,
      id_usuario,
      id_conta,
      id_tipo_categoria,
    } = request.body;
    const createTransferenciaUseCase = container.resolve(
      CreateTransferenciaUseCase
    );

    try {
      await createTransferenciaUseCase.execute({
        valor,
        descricao,
        id_tipo_transacao,
        id_usuario,
        id_conta,
        id_tipo_categoria,
      });

      return response.status(201).send({
        valor,
        descricao,
        id_tipo_transacao,
        id_usuario,
        id_conta,
        id_tipo_categoria,
      });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTransferenciaController };
