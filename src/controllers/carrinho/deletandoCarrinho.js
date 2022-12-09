const deletandoCarrinhoController = async (req, res) => {
    try {
        let carrinho = require("../../models/carrinho");
        const id = req.params.idCarrinho;
        const carro = await carrinho.findByPk(id);

        if (carro) {
            await carrinho.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "carrinho não encontrado!" });
        }

        return res.json({ message: "carrinho deletado com sucesso!", carrinho: carro })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});
    };
}

module.exports = deletandoCarrinhoController;