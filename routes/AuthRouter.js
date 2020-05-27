/**
 * a) Criar uma rota POST para o ENDPOINT /login direcinando a requisição para AuthController.login
 */

const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
router.post('/login',AuthController.login);
module.exports = router;