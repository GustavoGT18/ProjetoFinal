//Endpoints para cadastro, listagem, atualização e exclusão dos livros

import express from "express";
import bookControllers from "./bookControllers.js";

const app = express();
app.use(express.json());

//Pagina principal
app.get("/", (req, res) => res.send("Pagina Inicial!"));

//Endpoint para adicionar um novo livro
app.post("/livros", bookControllers.adicionar);

//Endpoint para listar todos os livros
app.get("/livros", bookControllers.listar);

//Endpoint para buscar e listar um livro pelo id
app.get("/livros/:id", bookControllers.buscar);

//Endpoint para atualizar as informações de um livro
app.put("/livros/:id", bookControllers.atualizar);

//Endpoint para excluir um livro
app.delete("/livros/:id", bookControllers.deletar);

export default app;
