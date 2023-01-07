Desenvolvimento Web - Back end

Professor: Bruno José de Souza
Aluno: Gustavo Igor da Silva

 Este projeto final é um CRUD para cadastro de livros feito inteiramente em JavaScript com Node.js e utilizando os frameworks express e mongoose. Além disso, ele usa o banco de dados não relacional MongoDB versão ATLAS.

O endpoint GET http://localhost:3000/ leva à uma página inicial.

O endpoint POST http://localhost:3000/livros é onde pode ser adicionado um novo livro com seu isbn, título, gênero, editora e autor (ID é adicionado automaticamente pelo MongoDB).

O endpoint GET http://localhost:3000/livros faz a listagem de todos os livros presentes no banco de dados. 

O endpoint GET http://localhost:3000/livros/(ID DO LIVRO) lista um livro específico utilizando o ID do mesmo.

O endpoint PUT http://localhost:3000/livros/(ID DO LIVRO) atualiza as informações de um livro já presente no banco de dados.

O endpoint DELETE http://localhost:3000/livros/(ID DO LIVRO) deleta um livro do banco de dados utilizando o ID do mesmo.



