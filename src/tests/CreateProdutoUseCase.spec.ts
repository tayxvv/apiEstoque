import { CreateProdutoUseCase } from "../modules/usuario/useCase/createProduto/CreateProdutoUseCase";
import { IProdutoRepository } from "../modules/usuario/repositories/IProdutoRepository";
import { AppError } from "../shared/errors/AppError";

const mockProdutoRepo: IProdutoRepository = {
  create: jest.fn(),
  update: jest.fn(),
  findByName: jest.fn(),
  findById: jest.fn(),
  selectAll: jest.fn(),
  delete: jest.fn(),
};

describe("CreateProdutoUseCase", () => {
  it("deve criar um novo produto com sucesso", async () => {
    const useCase = new CreateProdutoUseCase(mockProdutoRepo);

    const input = {
        nome_produto: "Produto Teste",
        descricao: "Descrição",
        preco: 10,
        quantidade_fornecedor: 10,
        id_categoria: 1,
    };

    (mockProdutoRepo.findByName as jest.Mock).mockResolvedValue(null);
    (mockProdutoRepo.create as jest.Mock).mockResolvedValue({ id: "123", ...input });

    const result = await useCase.execute(input);

    expect(mockProdutoRepo.create).toHaveBeenCalledWith(input);
    expect(result.nome_produto).toBe("Produto Teste");
  });

  it("deve lançar erro se produto já existir", async () => {
    const useCase = new CreateProdutoUseCase(mockProdutoRepo);

    const input = {
        nome_produto: "Produto Teste",
        descricao: "Descrição",
        preco: 10,
        quantidade_fornecedor: 10,
        id_categoria: 1,
    };

    (mockProdutoRepo.findByName as jest.Mock).mockResolvedValue({ id: "1", ...input });

    await expect(useCase.execute(input)).rejects.toBeInstanceOf(AppError);
  });
});