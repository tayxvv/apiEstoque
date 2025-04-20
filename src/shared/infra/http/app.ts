import "reflect-metadata";
import "../../container";
import express from "express";
import { router } from "./routes";
import { logMiddleware } from "./middleware/logMiddleware";
require("dotenv/config");

const app = express();

// Middleware para configurar CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware de Log de Requisição e Resposta
app.use(logMiddleware);

app.use(express.json());

app.use(router);

//app.listen(3333, () => console.log("Server is runningg"));

export { app };
