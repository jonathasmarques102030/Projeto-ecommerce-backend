const express = require("express");
const usuarioRouter = express.Router();
const alterandoUsuarioController = require("../controllers/usuario/alterandoUsuario");
const criandoUsuarioController = require("../controllers/usuario/criandoUsuario");
const deletandoUsuarioController = require("../controllers/usuario/deletandoUsuario");
const loginUsuarioController = require("../controllers/usuario/loginUsuarioController");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuario/pegandoUsuarioController");

usuarioRouter.post("/usuario", criandoUsuarioController);

usuarioRouter.get("/usuario", pegandoUsuarioController)

usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController)

usuarioRouter.post("/login", loginUsuarioController);

usuarioRouter.delete("/usuario/:id", deletandoUsuarioController);

usuarioRouter.put("/usuario/:idUsuario", alterandoUsuarioController);

module.exports = usuarioRouter;

