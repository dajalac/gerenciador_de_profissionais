/**
 *  Arquivo: backend\scr\controllers\profissao.controller.js
 * Descrição: arquivo responável pelas ações CRUD relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

const createProfissao = async(req, res)=>{
    res.json('created')

};

const getTodasProfissoes= async(req, res)=>{
    res.json('getTodasProfissoes')
};

const isProfissionalLinked = async(req, res)=>{
    res.json('isProfissionalLinked ')
};

const editProfissao = async(req, res)=>{
    res.json('editProfissao')
};

module.exports={
    createProfissao,
    getTodasProfissoes,
    isProfissionalLinked,
    editProfissao
} 

