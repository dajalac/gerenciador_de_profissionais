/* eslint-disable react/prop-types */
    import React from 'react';
    import {connect} from 'react-redux';
    import TableProfissoes from '../components/Tables/TableProfissoes';
    import './ScreensFormat.css';

    
    function ListarProfissoes({profissoes}) {
        
        return (
            <div className ="screen-position">
            <TableProfissoes profissoes ={profissoes}/>
        </div>
        )
    }
    
    const mapStateToProps = state =>({
        profissoes: state.getProfissoes
    })

  
    export default connect(mapStateToProps)(ListarProfissoes)
    
    