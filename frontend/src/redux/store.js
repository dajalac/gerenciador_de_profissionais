/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getProfissoes, editarOuCriarProfissao,isProfissionalAssociado} from '../redux/reducer/profissaoReducer';
import {getProfissionais, editarOuCriarProfissional} from '../redux/reducer/profissionaisReducer'

const reducer ={
    // profissao
    getProfissoes,
    editarOuCriarProfissao,
    isProfissionalAssociado,

    // profissionais
    getProfissionais,
    editarOuCriarProfissional

};

const rootReducer = combineReducers(reducer);

export const configureStore=()=>createStore(rootReducer, applyMiddleware(thunk)); 

