import express = require("express");
import clientRouter from "./router/clients"

const app = express();

app.use(clientRouter);
app.set('view engine', 'pug');
app.set('views', "./views")

app.listen(3000, () => {console.log("Servidor Criado")})
