/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/**
 *  Arquivo: backend\scr\controllers\profissionalController.js
 * Descrição: arquivo responável pelas ações CRUD relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

 const {validationResult} = require('express-validator');
const db = require('../config/dbConnection');
const formattingInput = require('../config/inputFormat')

/** Controller para listar todos os profissionais da base de dados */
const getTodosProfissionais =(req, res)=>{

    db.select('profissionais.nome',
            'profissoes.descricao',
            'profissionais.telefone',
            'profissionais.email' )
        .from('profissionais')
        .join('profissoes','profissionais.tipodeprofissao', '=','profissoes.id')
    .then((response)=>{
        res.json({error:false, data: response})
    })
    .catch(err=> res.status(400).json({error: true, message: 'Nao foi possivel acessar as profissoes'}))

};

/** Controller  para cadastrar novo profissional */
const createNovoProfissional =(req, res)=>{

    // fazer a validacao do input
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({erros: true, message: errors})
    }
    else{
        const{nome, email, telefone, situacao, profissaoId} = req.body;

        // formatar o input do usuario
        const nomeFormated = formattingInput(nome)
        
        db('profissionais').insert({
            nome: nomeFormated,
            situacao: situacao,
            email:email,
            telefone: telefone,
            tipodeprofissao: profissaoId,
            updatedat: new Date(),
            createdat: new Date()
        })
        .then(()=>{
           res.json({error: false, message: 'cadastro realizado com sucesso!'})
        })
        .catch(err =>res.status(400).json({error:true,message: 'Nao foi possivel cadastrar novo profissional'}))
    }
};

/** Controller para editar o cadastro do profissional */
const editProfissional =(req, res)=>{
    
    // fazer a validacao do input
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({erros: true, message: errors})
    }
    else{
        const{id, nome, email, telefone, situacao, profissaoId} = req.body;

        // formatar o input do usuario
        const nomeFormated = formattingInput(nome)
        
        db('profissionais').where('id','=',id)
        .update({
            nome: nomeFormated,
            situacao: situacao,
            email:email,
            telefone: telefone,
            tipodeprofissao: profissaoId,
            updatedat: new Date()
        })
        .then(()=>{
           res.json({error:false, message: 'atualizacao realizada com sucesso!'})
        })
        .catch(err =>res.status(400).json({error:true, message: 'Nao foi possivel atualizar o cadastro do profissional'}))
    }
};

module.exports ={
    getTodosProfissionais,
    createNovoProfissional,
    editProfissional
}