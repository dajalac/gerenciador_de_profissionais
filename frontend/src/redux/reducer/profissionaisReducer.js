/* eslint-disable import/prefer-default-export */

import {CREATE_PROFISSIONAL,
        CREATE_PROFISSIONAL_FAILURE,
        LISTAR_PROFISSIONAIS,
        LISTAR_PROFISSIONAIS_FAILURE,
        EDITAR_PROFISSIONAL,
        EDITAR_PROFISSIONAL_FAILURE} from '../actions/profissionalAction';


export const getProfissionais = (state =[], action)=>{
    const {type, payload} = action;
    
    switch(type){
        case LISTAR_PROFISSIONAIS: {
            const profissionais = payload
            return profissionais
        }
        case LISTAR_PROFISSIONAIS_FAILURE:{
            return state
        }
        default:
            return state
    }
}

export const editarOuCriarProfissional = (state = false, action) =>{
    const{type} =action;

    switch(type){
        case CREATE_PROFISSIONAL:{
            return true
        }
        case CREATE_PROFISSIONAL_FAILURE:{
            return false 
        }
        case EDITAR_PROFISSIONAL:{
            return true
        }
        case EDITAR_PROFISSIONAL_FAILURE:{
            return false
        }
        default:
            return state
    }
}