import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import auth from "../../../../config/auth";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const [, token] = authHeader.split(" ");

    try {
        const secret = auth.secret_token;
        const decoded = jwt.verify(token, secret);

        // Se quiser, pode armazenar o payload decodificado no request
        // req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};

export { authMiddleware };