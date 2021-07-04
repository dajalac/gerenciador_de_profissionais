/* eslint-disable import/prefer-default-export */


export const CREATE_PROFISSAO = 'CREATE_PROFISSAO';
export const createProfissao = novaProfissao =>({
    type: CREATE_PROFISSAO,
    payload: {novaProfissao}
});

export const CREATE_PROFISSAO_FAILURE ='CREATE_PROFISSAO_FAILURE'
export const createProfissaoFailure =()=>({
    type: CREATE_PROFISSAO_FAILURE
});



export const LISTAR_PROFISSOES_FAILURE = 'LISTAR_PROFISSOES_FAILURE';
export const listarProfissoesFailue =()=>({
    type: LISTAR_PROFISSOES_FAILURE
});

export const LISTAR_PROFISSOES = 'LISTAR_PROFISSOES';
export const listarProfissoes = ()=>({
    type:LISTAR_PROFISSOES
});

export const EDITAR_PROFISSAO = 'EDITAR_PROFISSAO';
export const editarProfissao =()=>({
    type: EDITAR_PROFISSAO,
});

export const EDITAR_PROFISSAO_FAILURE = 'EDITAR_PROFISSAO_FAILURE';
export const editarProfissaoFailure = ()=>({
    type: EDITAR_PROFISSAO_FAILURE
});

export const PROFISSIONAL_ASSOCIADO_TRUE ='PROFISSIONAL_ASSOCIADO_TRUE ';
export const profissionalAssociadoTrue =()=>({
    type:PROFISSIONAL_ASSOCIADO_TRUE
});

export const PROFISSIONAL_ASSOCIADO_FALSE ='PROFISSIONAL_ASSOCIADO_FALSE ';
export const profissionalAssociadoFalse =()=>({
    type:PROFISSIONAL_ASSOCIADO_FALSE
});