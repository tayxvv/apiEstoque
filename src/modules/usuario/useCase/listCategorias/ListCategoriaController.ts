import { Request, Response } from "express";
import { ListCategoriaUseCase } from "./ListCategoriaUseCase";
import { container } from "tsyringe";

class ListCategoriaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const lisCategoriaseCase = container.resolve(ListCategoriaUseCase);

    try {
      const categorias = await lisCategoriaseCase.execute();

      return response.status(200).send(categorias);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListCategoriaController };
