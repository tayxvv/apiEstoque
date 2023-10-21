import { Request, Response } from "express";
import { CreateContaBancariaUseCase } from "./CreateContaBancariaUseCase";
import { container } from "tsyringe";

class CreateContaBancariaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { numero_conta, saldo, nome_conta, id_tipo_conta, id_usuario } =
      request.body;
    const createContaBancariaUseCase = container.resolve(
      CreateContaBancariaUseCase
    );

    try {
      await createContaBancariaUseCase.execute({
        numero_conta,
        saldo,
        nome_conta,
        id_tipo_conta,
        id_usuario,
      });

      return response
        .status(201)
        .send({ numero_conta, saldo, nome_conta, id_tipo_conta, id_usuario });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateContaBancariaController };
