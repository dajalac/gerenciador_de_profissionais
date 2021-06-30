/**
 *  Arquivo: backend\scr\routes\profissao.route.js
 * Descrição: arquivo responável pelas rotas da API relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

 const express = require('express');

 const router = express.Router();
 const {getTodasProfissoes,
    isProfissionalLinked,
    createProfissao,
    editProfissao} = require('../controllers/profissaoController');

 
 router.get('/',getTodasProfissoes);

 router.get('/profissionalLinked',isProfissionalLinked);

 router.post('/novaProfissao', createProfissao);

 router.put('/editarProfissao',editProfissao);


 module.exports = router; 

