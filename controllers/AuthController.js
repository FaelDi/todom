const { Usuario } = requier("../models");
const bcrypt = require("bcrypt");

module.exports = {
    login: async (req, res) => {
        const usuario = await Usuario.findOne({ where: { email: req.body.email } });
        
        if (!usuario) {
        return res.status(403).json({ error: "Login inválido" });
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, usuario.senha);
        if (!senhaValida) {
        return res.status(403).json({ error: "Login inválido" });
        }
        return res.status(200).json({ msg: "sucesso" });
        } 
}