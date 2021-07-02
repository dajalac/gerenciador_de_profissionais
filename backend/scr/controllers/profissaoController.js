/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/**
 *  Arquivo: backend\scr\controllers\profissaoController.js
 * Descrição: arquivo responável pelas ações CRUD relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */
 
const {validationResult} = require('express-validator');
const db = require('../config/dbConnection');
const formattingInput = require('../config/inputFormat')


/** controller responsável por cadastrar nova profissao */
const createProfissao = async(req, res)=>{

    // fazer a validacao do input
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({erros:true, message: errors})
    }
    else{
        const{descricao, situacao} = req.body;

        // formatar o input do usuario
        const descricaoFormated = formattingInput(descricao)

        // verificar se a profissao ja existe na database. Se nao existir, criar novo cadastro.
        db.select('descricao').from('profissoes')
            .where( 'descricao','=', descricaoFormated)
        .then((response)=>{
            if (response.length>0){
                res.json({error: true, message: 'profissao ja existe em nosso cadastro'})
            }
            else{
                db('profissoes').insert({
                    descricao: descricaoFormated,
                    situacao: situacao,
                    updatedat: new Date(),
                    createdat: new Date()
                })
                .then(()=>{
                   res.json({error: false, message: 'cadastro realizado com sucesso!'})
                })
                .catch(err =>res.status(400).json({error:true, message: 'Nao foi possivel cadastrar nova profissao'}))
            }
        })
       .catch(erros=>res.status(400).json({error:true, message: 'Nao foi possivel verificar se profissao ja esta cadastrada'}))
    }
};

/** controller responsável por listar todas as profissoes */
const getTodasProfissoes= async(req, res)=>{

    db.select('*').from('profissoes')
    .then((response)=>{
        res.json({error:false, data: response})
    })
    .catch(err=> res.status(400).json({error: true, message: 'Nao foi possivel acessar as profissoes'}))
    
};

/** controller responsável por avaliar se alteracao no cadastro da profissao afetara algum profissional */
const isProfissionalLinked = async(req, res)=>{

    const {id} = req.body;

    db.select('nome').from('profissionais')
    .where('tipodeprofissao','=',id)
    .then((response)=>{
        if(response.length>0){
            res.json({error:false, data: response})
        }
        else{
            res.json({error: false, message: 'Nenhum profissional sera aftetado pela mudanca'})
        }
    })
    .catch(erros=>res.status(400).json({error:true, message: 'Nao foi possivel verificar se algum profissional sera afetado com a mudanca'}))
    
};

/** controller responsável por editar o cadastro da profissao */
const editProfissao = async(req, res)=>{

    // fazer a validacao do input
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({erro:true, message: errors})
    }
    else{
        const{descricao, situacao, id} = req.body;

        // formatar o input do usuario
        const descricaoFormated = formattingInput(descricao)

        // verificar se a profissao ja existe na database.
        // Se existir, atualizar somente a situacao
        // Se nao existir, fazer a atualizacao da descricao da profissao.
        db.select('descricao').from('profissoes')
            .where( 'descricao','=', descricaoFormated)
        .then((response)=>{
            if (response.length>0){
                db('profissoes').where('id', '=', id)
                    .update({
                        situacao: situacao,
                        updatedat: new Date(),
                    })
                    .then(()=>{
                        res.json({error: false, message: 'Atualizacao realizada com sucesso!'})
                     })
                     .catch(err =>res.status(400).json({error:true, message: 'Nao foi possivel atualizar a profissao'}))
            }
            else{
                db('profissoes').where('id', '=', id)
                    .update({
                        descricao: descricaoFormated,
                        situacao: situacao,
                        updatedat: new Date(),
                    })
                .then(()=>{
                   res.json({error:false, message: 'Atualizacao realizada com sucesso!'})
                })
                .catch(err =>res.status(400).json({error:true, message: 'Nao foi possivel atualizar a profissao'}))
            }
        })
       .catch(erros=>res.status(400).json({error:true, message: 'Nao foi possivel verificar se profissao ja esta cadastrada'}))
    }

  
};

module.exports={
    createProfissao,
    getTodasProfissoes,
    isProfissionalLinked,
    editProfissao
} 

