const express = require("express");
const carrinhoRouter = express.Router();

const criandoCarrinhoController = require("../controllers/Carrinho/criandoCarrinho");
const { pegandoCarrinhoController, pegandoCarrinhoIdController } = require("../controllers/Carrinho/pegandoCarrinhocontroller")
const alterandoCarrinhoController = require("../controllers/Carrinho/alterandoCarrinho");
const deletandoCarrinhosController = require("../controllers/Carrinho/deletandoCarrinho");

carrinhoRouter.post("/Carrinho/:idUsuario", criandoCarrinhoController);

carrinhoRouter.get("/Carrinho", pegandoCarrinhoController);
carrinhoRouter.get("/Carrinho/:id", pegandoCarrinhoIdController);

carrinhoRouter.put("/Carrinho/:id", alterandoCarrinhoController);

carrinhoRouter.delete("/Carrinho/:id", deletandoCarrinhosController)


module.exports = carrinhoRouter;