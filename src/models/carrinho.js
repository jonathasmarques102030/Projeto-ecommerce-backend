const Sequelize = require("sequelize")
const dataBase = require("../connection/db")

const Carrinho = dataBase.define("carrinho", {
    idCarrinho: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    produto_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    status: {
        type: Sequelize.STRING,

    }
})

module.exports = Carrinho;