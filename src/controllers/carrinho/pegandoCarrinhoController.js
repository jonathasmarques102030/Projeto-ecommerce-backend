const pegandoCarrinhoController = async (req, res) => {
    try {
        const carrinho = require("../../models/carrinho")
        const carrinhos = await carrinho.findAll()
        if (carrinhos != "") {
            return res.json({ carrinhos })
        } else {
            return res.json({ message: "Nenhum carrinho foi encontrado!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}


const pegandoCarrinhoIdController = async (req, res) => {
    try {
        const carrinho = require("../../models/carrinho");
        const id = req.params.idCarrinho;
        const carrinhos = await carrinho.findByPk(id);
        if (carrinhos) {
            return res.json({ carrinho: carrinhos });
        } else {
            return res.json({ message: "carrinho inexistente!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = { pegandoCarrinhoIdController, pegandoCarrinhoController }