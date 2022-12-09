const bcrypt = require("bcrypt")
let usuario = require("../../models/usuario")

const loginUsuarioController = async (req, res) => {
    try {
        const { email, senha } = req.body
        const usuarioExistente = await usuario.findOne({ where: { email: email } });

        if(!usuarioExistente) {
            return res.json("Email invalido!")
        }
        console.log(senha)
        let senhaValida = await bcrypt.compare(senha, usuarioExistente.dataValues.senha);
        console.log(senhaValida)
        if(!senhaValida) {
            return res.json("Senha incorreta!")
        }
        await usuario.update({
            idUsuario: usuarioExistente.idUsuario,
            nome: usuarioExistente.nome,
            email: usuarioExistente.email,
            senha: usuarioExistente.senha,
            logado: 1
        }, { where: { idUsuario: usuarioExistente.idUsuario } });
        return res.json({ message: "Login efetuado com sucesso!", usuario: usuarioExistente });
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" })
    }
}

module.exports = loginUsuarioController