//Conexão com o banco de dados MongoDB Atlas

import { mongoose } from "mongoose";
mongoose.set("strictQuery", true);

const urlDatabase =
  "mongodb+srv://Gustavo:mZAY3hv0ae8oF1PH@projetofinal.fc2tpgi.mongodb.net/?retryWrites=true&w=majority";

export const startDB = () => {
  mongoose.connect(urlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("conectado ao banco de dados!"));
};
