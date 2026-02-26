import clientsModel from "./Model/clientsModel";
import db from "./db";

async function run() {
  try {
    await db.authenticate();
    console.log("Conexão OK");

    await db.sync();

    const novo = await clientsModel.create({});
    console.log("Criado:", novo.toJSON());
  } catch (e) {
    console.error("ERRO:", e);
  }
}
