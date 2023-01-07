//Schema para o banco de dados

import mongoose from "mongoose";
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
  id: ObjectId,
  isbn: String,
  titulo: String,
  genero: String,
  editora: String,
  autor: String,
});

export const Livros = mongoose.model("Livros", bookSchema);
