const pegandoProdutoController = async (req, res) => {
    try {
        const produto = require("../../models/produto")
        const produtos = await produto.findAll()
        if (produtos != "") {
            return res.json({ produtos })
        } else {
            return res.json({ message: "Nenhum produto foi encontrado!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

const pegandoProdutoIdController = async (req, res) => {
    try {
        const produto = require("../../models/produto");
        const id = req.params.idProduto;
        const produtos = await produto.findByPk(id);
        if (produtos) {
            return res.json({ produto: produtos });
        } else {
            return res.json({ message: "produto inexistente!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = { pegandoProdutoController, pegandoProdutoIdController }