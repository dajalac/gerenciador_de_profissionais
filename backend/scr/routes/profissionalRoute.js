/**
 *  Arquivo: backend\scr\routes\profissionalRoute.js
 * Descrição: arquivo responável pelas rotas da API relacionadas a entidade profissional
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

 const express = require('express');

 const router = express.Router();
 const {check} = require('express-validator');
 const{getTodosProfissionais,
    createNovoProfissional,
    editProfissional} = require('../controllers/profissionalController');
 

 router.get('/',getTodosProfissionais);

 router.post('/novoProfissional',[check('nome').custom((value) => value.match(/^[A-Za-z ]+$/)),
                                 check('email').isEmail()],
               createNovoProfissional);

 router.put('/editarProfissional',[check('nome').custom((value) => value.match(/^[A-Za-z ]+$/)),
                                 check('email').isEmail()],
                                 editProfissional);


 module.exports = router; 
