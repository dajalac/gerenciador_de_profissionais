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

 // route: /api/profissao'/
 router.get('/',getTodasProfissoes);

 // route: /api/profissao/profissionalLinked'
 router.post('/profissionalLinked',isProfissionalLinked);

 // route: /api/profissao/novaProfissao

 router.post('/novaProfissao',[check('descricao', 'descricao invalida').custom((value) => value.match(/^[A-Za-z0-9 ]+$/))], 
            createProfissao);
// route: /api/profissao/editarProfissao
 router.put('/editarProfissao',[check('descricao', 'descricao invalida').custom((value) => value.match(/^[A-Za-z0-9 ]+$/))],
            editProfissao);


 module.exports = router; 

