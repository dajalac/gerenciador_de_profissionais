
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadProfissionais} from  '../redux/thunk/profissionaisThunk';
import TableProfissionais from '../components/Tables/TableProfissionais';
import './ScreensFormat.css'


function ListarProfissionais({todos, onGetProfissionais}) {

    useEffect(()=>{
        onGetProfissionais()
        
    },[])
    
    console.log(`segundo ${todos}`)



    return (
        
        <div className ="screen-position">
            <TableProfissionais profissionais={todos}/>
        </div>
    )

}

const mapStateToProps = (state) =>({
    
    todos: state.getProfissionais
    
})

const mapDispatchToProps = dispatch =>({
    onGetProfissionais: ()=>dispatch(loadProfissionais())
    })

export default connect(mapStateToProps, mapDispatchToProps)(ListarProfissionais)
