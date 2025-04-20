// import { app } from "./shared/infra/http/app";

// app.listen(3333, () => console.log("SErver is running"));

import { app } from './app';

const PORT = process.env.PORT || 3334;

app.listen(PORT, () => console.log("Server is running"));

app.get('/', (req, res) => {
    res.send('API rodando');
  });