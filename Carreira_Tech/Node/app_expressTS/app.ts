import express = require("express");
import clientRouter from "./router/clients";
import db from "./db";

const app = express();
app.use(express.urlencoded({ extended: true }));//fazer a comunicação entre o fomulario e o model
app.use(clientRouter);

app.set('view engine', 'pug');
app.set('views', "./views")

db.sync().then(() => {
    console.log("conectado ao banco: ",process.env.DB_NAME)
}). then(() => {
    app.listen(process.env.PORT, () => {console.log("Servidor Criado")})

}).catch(err => console.error("Erro ao sincronizar banco:", err));

