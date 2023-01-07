/*
                      PROJETO FINAL

Professor: Bruno José de Souza
Aluno: Gustavo Igor da Silva
Matéria: Desenvolvimento Web Back-End
*/

import { startDB } from "./database.js";
import app from "./routes.js";
startDB();
const port = 3000;

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
