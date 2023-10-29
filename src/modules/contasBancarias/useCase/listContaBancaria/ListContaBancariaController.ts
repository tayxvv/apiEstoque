import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListContaBancariaUseCase } from "./ListContaBancariaUseCase";

class ListContaBancariaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listContaBancariaUseCase = container.resolve(
      ListContaBancariaUseCase
    );

    try {
      const contasBancarias = await listContaBancariaUseCase.execute();

      return response.status(200).send({ contasBancarias });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListContaBancariaController };
