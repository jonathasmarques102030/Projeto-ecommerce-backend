(async () =>{
    const dataBase = require("./src/connection/db")
    const Produto = require("./src/models/produto")
    const Usuario = require("./src/models/usuario")
    const Carrinho = require("./src/models/carrinho")
    await dataBase.sync()
})();

require("./src/connection/db")
const express = require("express");
const cors = require("cors");
const usuarioRouter = require("./src/routes/usuario.routes");
const produtoRouter = require("./src/routes/produto.routes");
const carrinhoRouter = require("./src/routes/carrinho.routes");
const app = express()
const port = 3020 

app.use(cors())
app.use(express.json())
app.use(usuarioRouter)
app.use(produtoRouter)
app.use(carrinhoRouter)

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port) 
});