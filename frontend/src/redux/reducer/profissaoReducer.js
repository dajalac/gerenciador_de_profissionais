/* eslint-disable import/prefer-default-export */
import{CREATE_PROFISSAO,
    CREATE_PROFISSAO_FAILURE,
    LISTAR_PROFISSOES_FAILURE,
    LISTAR_PROFISSOES,
     EDITAR_PROFISSAO,
     EDITAR_PROFISSAO_FAILURE,
    PROFISSIONAL_ASSOCIADO_TRUE,
    PROFISSIONAL_ASSOCIADO_FALSE} from '../actions/profissaoActions'

export const getProfissoes = (state =[], action)=>{
    const{type,payload} =action;

    switch(type){
        case LISTAR_PROFISSOES: {
            const profissoes =payload
            return profissoes
        }
        case LISTAR_PROFISSOES_FAILURE:{
            return state
        }
        default:
            return state
    }
};

export const editarOuCriarProfissao = (state = false, action) =>{
    const{type} =action;

    switch(type){
        case CREATE_PROFISSAO:{
            return true
        }
        case CREATE_PROFISSAO_FAILURE:{
            return false 
        }
        case EDITAR_PROFISSAO:{
            return true
        }
        case EDITAR_PROFISSAO_FAILURE:{
            return false
        }
        default:
            return state
    }
}


export const isProfissionalAssociado = (state = false, action) =>{
    const{type} =action;

    switch(type){
        case PROFISSIONAL_ASSOCIADO_TRUE:{
            return true
        }
        case PROFISSIONAL_ASSOCIADO_FALSE:{
            return false 
        }
        default:
            return state
    }
}