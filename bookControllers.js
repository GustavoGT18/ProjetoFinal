//Controles para as rotas

import { Livros } from "./bookModel.js";

class bookControllers {
  async adicionar(req, res) {
    //Controller para adicionar novos livros
    try {
      const { isbn, titulo, genero, editora, autor } = req.body;

      if (!isbn || !titulo || !genero || !editora || !autor) {
        return res.status(404).json({
          message:
            "isbn, título, gênero, editora e autor do livro são obrigatórios!",
        }); /*Validação para evitar que falte alguma das informações obrigatórias para cadastro do livro */
      }

      const createdBook = await Livros.create(req.body);

      return res.status(200).json(createdBook);
    } catch (error) {
      console.error(error);
    }
  }

  async listar(req, res) {
    //Controller para listar todos os livros
    try {
      const livros = await Livros.find();

      return res.status(200).json(livros);
    } catch (error) {
      console.error(error);
    }
  }

  async buscar(req, res) {
    //Controller para buscar um livro específico pelo id
    try {
      const { id } = req.params;

      const livro = await Livros.findById(id);

      if (!livro) {
        return res.status(404).json({ message: "O livro não existe!" });
      }

      return res.status(200).json(livro);
    } catch (error) {
      return res
        .status(404)
        .json({ message: "Falha ao buscar o livro, confira o id." });
    }
  }

  async atualizar(req, res) {
    //Controller para atualiar as informações de um livro
    try {
      const { id } = req.params;

      await Livros.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      return res
        .status(404)
        .json({ message: "A atualização do livro falhou." });
    }
  }

  async deletar(req, res) {
    //Controller para excluír um livro
    try {
      const { id } = req.params;

      const deletedBook = await Livros.findByIdAndDelete(id);

      if (!deletedBook) {
        return res.status(404).json({ message: "O livro não existe." });
      }

      return res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (error) {
      return res
        .status(404)
        .json({ message: "Erro ao tentar excluir o livro, confira o id." });
    }
  }
}

export default new bookControllers();
