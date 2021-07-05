/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {createProfissao,
    createProfissaoFailure,
    listarProfissoes,
    listarProfissoesFailue,
    editarProfissao,
    editarProfissaoFailure,
    profissionalAssociadoFalse,
    profissionalAssociadoTrue,
    loadProfissaoInProgress,
    loadProfissaofailure} from  '../actions/profissaoActions'

export const loadProfissoes = () => async (dispatch)=>{
    
    try{
        dispatch(loadProfissaoInProgress())
        const response = await axios.get('/api/profissao/');
 
        if (response.data.error){
            dispatch(listarProfissoesFailue())
        
        }
        else{
            dispatch(listarProfissoes(response.data.data))
            
        }  
    }
    catch{
        dispatch(loadProfissaofailure())
    }
   
};

export const criarProfissao = (novaProfissao) =>async(dispatch)=>{
    const response = await axios.post('/api/profissao/novaProfissao',{
        descricao: novaProfissao.descricao,
        situacao: novaProfissao.situacao
    });

    if(response.data.error){
        dispatch(createProfissaoFailure())
    }
    else{
        dispatch(createProfissao())
    }

}

export const profissaoEditar = (profissaoEditada) =>(dispatch)=>{
    axios.put('/api/profissao/editarProfissao',{
        descricao: profissaoEditada.descricao,
        situacao: profissaoEditada.situacao
    })
    .then((response)=>{
        if(response.error){
            dispatch(editarProfissaoFailure())
        }
        else{
            dispatch(editarProfissao())
        }
    })

    
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

