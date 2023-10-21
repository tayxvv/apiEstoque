import { ICreateTransacaoFinanceiraDTO } from "../dto/ICreateTransacaoFinanceiraDTO";
import { TransacaoFinanceira } from "../infra/entities/TransacaoFinanceira";

interface ITransacaoFinanceiraRepository {
  create(data: ICreateTransacaoFinanceiraDTO): Promise<TransacaoFinanceira>;
}

export { ITransacaoFinanceiraRepository };
