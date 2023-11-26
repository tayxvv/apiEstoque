import { Request, Response } from "express";
import { UpdateContaBancariaUseCase } from "./UpdateContaBancariaUseCase";
import { container } from "tsyringe";

class UpdateContaBancariaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { numero_conta, saldo, nome_conta, id_tipo_conta, id_usuario } =
      request.body;
    const updateContaBancariaUseCase = container.resolve(
      UpdateContaBancariaUseCase
    );

    try {
      await updateContaBancariaUseCase.execute({
        id_conta: id,
        numero_conta,
        saldo,
        nome_conta,
        id_tipo_conta,
      });

      return response
        .status(201)
        .send({ numero_conta, saldo, nome_conta, id_tipo_conta, id_usuario });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateContaBancariaController };
