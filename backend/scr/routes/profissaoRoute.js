/**
 *  Arquivo: backend\scr\routes\profissaRoute.js
 * Descrição: arquivo responável pelas rotas da API relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

 const express = require('express');
 const {check} = require('express-validator');

 const router = express.Router();
 const {getTodasProfissoes,
    isProfissionalLinked,
    createProfissao,
    editProfissao} = require('../controllers/profissaoController');

 
 router.get('/',getTodasProfissoes);

 router.post('/profissionalLinked',isProfissionalLinked);

 router.post('/novaProfissao',[check('descricao', 'descricao invalida').custom((value) => value.match(/^[A-Za-z0-9 ]+$/))], 
            createProfissao);

 router.put('/editarProfissao',[check('descricao', 'descricao invalida').custom((value) => value.match(/^[A-Za-z0-9 ]+$/))],
            editProfissao);


 module.exports = router; 

