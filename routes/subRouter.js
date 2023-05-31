const express = require('express');
const router = express.Router();
const subController = require('../controllers/subController');
const upload = require("../config/multer");

router.post('/cadastro', upload.single("file"), subController.cadastro);
router.get('/buscar', subController.buscar);
router.get('/buscarId/:id', subController.buscarPorId);
router.get('/buscarNome/:nome', subController.buscarPorNome);
router.get('/buscarSobrenome/:sobrenome', subController.buscarPorSobrenome);
router.get('/buscarCidade/:cidade', subController.buscarPorCidade);
router.get('/buscarEstado/:estado', subController.buscarPorEstado);
router.get('/buscarStatus/:status', subController.buscarPorStatus);
router.put('/atualizar/:id', upload.single("file"), subController.atualizar);
router.delete('/deletar/:id', subController.excluir);

module.exports = router;