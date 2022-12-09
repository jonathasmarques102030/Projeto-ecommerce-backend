const { hash } = require("bcrypt");

const criandoProdutoController = async (req, res) => {
    try {
        const db = require("../../connection/db")
        const produto = require("../../models/produto")
    
        await db.sync()
    
        const { titulo, descricao, valor } = req.body
        const produtoExistente = await produto.findOne({ where: { titulo: titulo } });

        if(produtoExistente) {
            return res.json("Produto invalido!")
        }

        const novoProduto = await produto.create({
            titulo, descricao, valor
        });
        console.log(novoProduto)
        return res.json({produto: novoProduto})
    } catch(err){
        return res.json({error: err})
    }

};

module.exports = criandoProdutoController