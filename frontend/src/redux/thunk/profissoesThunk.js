/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {createProfissao,
    createProfissaoFailure,
    listarProfissoes,
    listarProfissoesFailue,
    editarProfissao,
    editarProfissaoFailure,
    profissionalAssociadoFalse,
    profissionalAssociadoTrue} from  '../actions/profissaoActions'

export const loadProfissoes = () => async (dispatch)=>{
    const response = await axios.get('/api/profissao/');
 
    if (response.data.error){
        dispatch(listarProfissoesFailue())
    
    }
    else{
        dispatch(listarProfissoes(response.data.data))
        
    }   
};

export const criarProfissao = (novaProfissao) =>async(dispatch)=>{
    const response = await axios.post('/api/profissao/novaProfissao',{
        descricao: novaProfissao.descricao,
        situacao: novaProfissao.situacao
    });

    if(response.error){
        dispatch(createProfissaoFailure())
    }
    else{
        dispatch(createProfissao())
    }
};

export const profissaoEditar = (profissaoEditada) =>async(dispatch)=>{
    const response = await axios.put('/api/profissao/editarProfissao',{
        descricao: profissaoEditada.descricao,
        situacao: profissaoEditada.situacao
    });

    if(response.error){
        dispatch(editarProfissaoFailure())
    }
    else{
        dispatch(editarProfissao())
    }
};

export const checkAssociacao = () => async(dispatch)=>{
    const response = await axios.get('/api/profissao/profissionalLinked');

    if(response.error){
        dispatch(profissionalAssociadoFalse())
    }
    else{
        dispatch(profissionalAssociadoTrue())
    }
}

