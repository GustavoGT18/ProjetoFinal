Desenvolvimento Web - Back end

Professor: Bruno José de Souza

Aluno: Gustavo Igor da Silva

 Este projeto final é um CRUD para cadastro de livros feito inteiramente em JavaScript com Node.js e utilizando os frameworks express e mongoose. Além disso, ele usa o banco de dados não relacional MongoDB versão ATLAS.
 Ele permite ao usuário cadastrar novos livros com as informações do isbn, título, gênero, editora e autor deles, também viabiliza a atualização das informações de um livro já cadastrado através do seu ID gerado pelo MongoDB, ID esse que pode ser obtido ao usar a opção de listagem geral de todos os livros presentes no banco de dados. Ainda utilizando os ID's obtidos pela listagem geral, o usuário pode listar apenas um livro específico usando o ID do mesmo ou até deletar um livro utilizando o seu ID por via da função de deletar.

O endpoint GET http://localhost:3000/ leva à uma página inicial.

O endpoint POST http://localhost:3000/livros é onde pode ser adicionado um novo livro com seu isbn, título, gênero, editora e autor (ID é adicionado automaticamente pelo MongoDB). Esse endpoint ainda possui uma restrição para que o cadastro do livro seja impedido caso alguma das informações acima esteja faltando.

O endpoint GET http://localhost:3000/livros faz a listagem de todos os livros presentes no banco de dados. 

O endpoint GET http://localhost:3000/livros/(ID DO LIVRO) lista um livro específico utilizando o ID do mesmo.

O endpoint PUT http://localhost:3000/livros/(ID DO LIVRO) atualiza as informações de um livro já presente no banco de dados.

O endpoint DELETE http://localhost:3000/livros/(ID DO LIVRO) deleta um livro do banco de dados utilizando o ID do mesmo.



