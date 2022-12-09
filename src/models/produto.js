const Sequelize = require("sequelize")
const dataBase = require("../connection/db")

const Produto = dataBase.define("produto", {
    idProduto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.FLOAT,
    }
})

module.exports = Produto;