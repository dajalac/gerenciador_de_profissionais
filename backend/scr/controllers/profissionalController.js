/**
 *  Arquivo: backend\scr\controllers\profissao.controller.js
 * Descrição: arquivo responável pelas ações CRUD relacionadas a entidade profissão
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

const getTodosProfissionais =async(req, res)=>{
    res.json('getTodosProfissionais')
};

const createNovoProfissional =async(req, res)=>{
    res.json('createNovoProfissional')
};

const editProfissional =async(req, res)=>{
    res.json('editProfissional')
};

module.exports ={
    getTodosProfissionais,
    createNovoProfissional,
    editProfissional
}

