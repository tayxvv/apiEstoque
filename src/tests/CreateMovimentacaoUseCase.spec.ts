import { Movimentacao } from "../modules/usuario/infra/entities/Movimentacao";
import { CreateMovimentacaoUseCase } from "../modules/usuario/useCase/createMovimentacao/CreateMovimentacaoUseCase";
import { IMovimentacaoRepository } from "../modules/usuario/repositories/IMovimentacaoRepository";

const mockMovimentacaoRepo: IMovimentacaoRepository = {
  create: jest.fn(),
  update: jest.fn(),
  findById: jest.fn(),
  selectAll: jest.fn()
};

describe("CreateMovimentacaoUseCase", () => {
  it("deve criar uma nova movimentação com sucesso", async () => {
    const useCase = new CreateMovimentacaoUseCase(mockMovimentacaoRepo);

    const input = {
      observacao: "Entrada de estoque",
      quantidade: 50,
      data: "2025-06-07",
      id_produto: 1,
      id_tipo_movimentacao: 1,
    };

    const fakeMovimentacao: Movimentacao = {
      id: 1,
      ...input,
    };

    (mockMovimentacaoRepo.create as jest.Mock).mockResolvedValue(fakeMovimentacao);

    const result = await useCase.execute(input);

    expect(mockMovimentacaoRepo.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(fakeMovimentacao);
  });
});
