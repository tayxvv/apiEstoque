import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListContaBancariaByIdUseCase } from "./ListContaBancariaByIdUseCase";

class ListContaBancariaByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const listContaBancariaByIdUseCase = container.resolve(
      ListContaBancariaByIdUseCase
    );

    try {
      const contaBancaria = await listContaBancariaByIdUseCase.execute(id);

      if (contaBancaria) {
        return response.status(200).send({ contaBancaria });
      }

      return response
        .status(404)
        .send({ message: "Conta bancária não encontrada" });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListContaBancariaByIdController };
