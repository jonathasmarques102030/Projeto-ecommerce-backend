const Sequelize = require("sequelize");
const dataBase = require("../connection/db");

const Usuario = dataBase.define("usuario", {
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
    }
});

module.exports = Usuario;