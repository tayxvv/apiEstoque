import { Request, Response, NextFunction } from 'express';

// Middleware de log de requisição e resposta
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now(); // Tempo de início

  // Criar uma função para logar a resposta antes de enviá-la
  const originalSend = res.send;

  // Sobrescreve o método send da resposta
  res.send = (body: any): Response => {
    const duration = Date.now() - startTime; // Duração da requisição

    // Registra o log da requisição e resposta
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms - Response: ${JSON.stringify(body)}`);

    // Chama o método send original para enviar a resposta e garante o tipo correto de retorno
    return originalSend.call(res, body);
  };

  next();
};


export { logMiddleware };