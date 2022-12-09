const deletandoProdutoController = async (req, res) => {
    try {
        let produto = require("../../models/produto");
        const id = req.params.idProduto;
        const product = await produto.findByPk(id);

        if (product) {
            await produto.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "produto não encontrado!" });
        }

        return res.json({ message: "produto deletado com sucesso!", produto: product })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});
    };
}

module.exports = deletandoProdutoController;