const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
//Ao acessar a rota é retornado todas as pessoas cadastradas
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
//Deverar acessar a rota passando o id da pessoa
router.post('/pessoas', PessoaController.criarPessoa)
//Cria uma pessoa recebendo o body com as informações
router.post('/pessoas/:id/restaura', PessoaController.restauraPessa)
//Restaura uma pessoa recebendo o id da pessoa
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
//Atualizar uma pessoa recebendo o body com as informações
router.delete('/pessoas/:id', PessoaController.apagaPessoas)
//Deletar uma pessoa recebendo o body com as informações

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula/', PessoaController.criarMatricula)
module.exports = router