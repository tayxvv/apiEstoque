import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
import pgPromise, { IDatabase } from 'pg-promise';

interface QueryParams {
  param1: string;
  param2: number;
}

const pgp = pgPromise();

class Connection {
  public db: IDatabase<unknown>;

  constructor() {
    // Usando a variável de ambiente DATABASE_URL do Railway
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error("DATABASE_URL não está definida.");
    }

    // Conectando ao banco usando a URL completa
    this.db = pgp(dbUrl);
    console.log('conectou');
  }

  // Método para executar consultas
  async query<T>(sql: string, params?: QueryParams): Promise<T[]> {
    try {
      const result = await this.db.query(sql, params);
      return result;
    } catch (error) {
      throw new Error(`Erro na consulta SQL: ${error.message}`);
    }
  }

  // Método para fechar a conexão
  async close() {
    await this.db.$pool.end();
  }
}

export { Connection };
