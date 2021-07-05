import React from 'react';
import {connect} from 'react-redux';
import{criarProfissao} from '../redux/thunk/profissoesThunk';
import FormProfissao from '../components/Froms/FormProfissao';
import './ScreensFormat.css'

function NovaProfissao({onCriarNovaProfissao}) {

    return (
        <div className= "screen-position">
            <FormProfissao onCriarNovaProfissao={onCriarNovaProfissao} />
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    onCriarNovaProfissao: (data) =>dispatch(criarProfissao(data))
})


export default connect(null, mapDispatchToProps)(NovaProfissao)
