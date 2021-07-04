import axios from 'axios';
import {createProfissional,
        createProfissionalFailure,
        listarProfissionais,
        listarProfissionaisFailure,
        editarProfissional,
        editarProfissionalFailure} from '../actions/profissionalAction';

export const loadProfissionais = () => async (dispatch)=>{
    const response = await axios.get('/api/profissional/');

    if (response.error){
        dispatch(listarProfissionaisFailure())
    }
    else{
        dispatch(listarProfissionais(response.data))
    }   
};

export const criarProfissional = (novoProfissional) =>async(dispatch)=>{
    const response = await axios.post('/api/profissional/novoProfissional',{
        nome: novoProfissional.nome,
        situacao:novoProfissional.situacao,
        profissao: novoProfissional.profissao,
        email: novoProfissional.email,
        telefone: novoProfissional.telefone
    });

    if(response.error){
        dispatch(createProfissionalFailure())
    }
    else{
        dispatch(createProfissional())
    }
};

export const profissionalEditar = (profissionalEditado) =>async(dispatch)=>{
    const response = await axios.put('/api/profissional/editarProfissional',{
        nome: profissionalEditado.nome,
        situacao:profissionalEditado.situacao,
        profissao: profissionalEditado.profissao,
        email: profissionalEditado.email,
        telefone: profissionalEditado.telefone
    });

    if(response.error){
        dispatch(editarProfissionalFailure())
    }
    else{
        dispatch(editarProfissional())
    }
};
