/**
 *  Arquivo: backend\scr\routes\profissao.route.js
 * Descrição: arquivo responável pelas rotas da API relacionadas a entidade profissional
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

 const express = require('express');

 const router = express.Router();
 const{getTodosProfissionais,
    createNovoProfissional,
    editProfissional} = require('../controllers/profissionalController');
 

 router.get('/',getTodosProfissionais);

 router.post('/novoProfissional', createNovoProfissional);

 router.put('/editarProfissional',editProfissional);


 module.exports = router; 
