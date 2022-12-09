const { hash } = require("bcrypt")

const alterandoProdutoController = async (req, res) => {
    try {
        let produto = require("../../models/produto");
        const idProduto = req.params.idProduto;
        const { titulo, descricao, valor } = req.body;
        const produtoExistente = produto.findByPk(idProduto);
        await produto.update({
            titulo: titulo || produtoExistente.titulo,
            descricao: descricao || produtoExistente.descricao,
            valor: valor || produtoExistente.valor,
        }, { where: { idProduto: idProduto } });
        const produtoAtualizado = await produto.findByPk(idProduto);
        return res.json({ message: "produto atualizado com sucesso!", produto: produtoAtualizado })
    } catch (err) {
        return console.log(err)
    }
};

module.exports = alterandoProdutoController;