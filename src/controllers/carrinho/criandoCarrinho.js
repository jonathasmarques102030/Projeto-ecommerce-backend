const { hash } = require("bcrypt");

const criandoCarrinhoController = async (req, res) => {
    try {
        const db = require("../../connection/db")
        const carrinho = require("../../models/carrinho")
    
        await db.sync()
    
        const { usuario_id, produto_id, status } = req.body
        const carrinhoExistente = await carrinho.findOne({ where: { produto_id: produto_id } });

        if(carrinhoExistente) {
            return res.json("Produto invalido!")
        }

        const novoCarrinho = await carrinho.create({
            usuario_id, produto_id, status
        });
        console.log(novoCarrinho)
        return res.json({carrinho: novoCarrinho})
    } catch(err){
        return res.json({error: err})
    }

};

module.exports = criandoCarrinhoController