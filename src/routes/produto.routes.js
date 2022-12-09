const express = require("express");
const produtoRouter = express.Router();

const criandoProdutoController = require("../controllers/Produto/criandoProduto");
const { pegandoProdutoController, pegandoProdutoIdController } = require("../controllers/Produto/pegandoProdutocontroller")
const alterandoProdutoController = require("../controllers/Produto/alterandoProduto");
const deletandoProdutosController = require("../controllers/Produto/deletandoProduto");

produtoRouter.post("/Produto/:idUsuario", criandoProdutoController);

produtoRouter.get("/Produto", pegandoProdutoController);
produtoRouter.get("/Produto/:id", pegandoProdutoIdController);

produtoRouter.put("/Produto/:id", alterandoProdutoController);

produtoRouter.delete("/Produto/:id", deletandoProdutosController)


module.exports = produtoRouter;