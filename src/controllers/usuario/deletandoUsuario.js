const deletandoUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const id = req.params.idUsuario;
        const user = await usuario.findByPk(id);

        if (user) {
            await usuario.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "Usuario não encontrado!" });
        }

        return res.json({ message: "Usuario deletado com sucesso!", usuario: user })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});
    };
}

module.exports = deletandoUsuarioController;