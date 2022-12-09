const { hash } = require("bcrypt")

const alterandoCarrinhoController = async (req, res) => {
    try {
        let carrinho = require("../../models/carrinho");
        const idCarrinho = req.params.idCarrinho;
        const { usuario_id, produto_id, status } = req.body;
        const carrinhoExistente = carrinho.findByPk(idCarrinho);
        await carrinho.update({
            usuario_id: usuario_id || carrinhoExistente.usuario_id,
            produto_id: produto_id || carrinhoExistente.produto_id,
            status: status || carrinhoExistente.status,
        }, { where: { idCarrinho: idCarrinho } });
        const carrinhoAtualizado = await carrinho.findByPk(idCarrinho);
        return res.json({ message: "carrinho atualizado com sucesso!", carrinho: carrinhoAtualizado })
    } catch (err) {
        return console.log(err)
    }
};

module.exports = alterandoCarrinhoController;