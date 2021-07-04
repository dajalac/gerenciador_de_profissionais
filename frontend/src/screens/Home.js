/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import { useHistory} from 'react-router-dom';
import {Work, 
     AddCircle, 
     Person, 
     PersonAdd} from '@material-ui/icons';
import {loadProfissoes} from '../redux/thunk/profissoesThunk';
import {loadProfissionais} from  '../redux/thunk/profissionaisThunk';
import Card from '../components/Cards/card';
import './Home.css'


function Home({onGetProfissoes, onGetProfissionais}) {// eslint-disable-next-line prefer-const
    let history = useHistory();


    const onListarProfissionais=(()=>{
        
        onGetProfissionais(); 
        history.push('/listarProfissionais')
    });
    
    const onListarProfissao =(()=>{
        onGetProfissoes(); 
        history.push('/listarProfissoes')
    });
    
    const onCadastrarProfissional =(()=>{
        history.push('/novoProfissional')
    });
    
    const onCadastrarProfissao =(()=>{
        history.push('/novaProfissao')
    })
    

  return (
    <div className =" home-screen">
       <div className ="home-screen-items">
        <Card icon={Person} btnText='Listar Profissionais' onClickBtn={onListarProfissionais}/>
        <Card icon={Work} btnText='Listar Profissões'onClickBtn={onListarProfissao}/>
        <Card icon={PersonAdd} btnText='Cadastrar Profissional'onClickBtn={onCadastrarProfissional}/>
        <Card icon ={AddCircle} btnText='Cadastrar Profissões'onClickBtn={onCadastrarProfissao}/>
        </div>
        </div>

    
  );
}


const mapDispatchToProps = dispatch =>({
    onGetProfissoes: () => dispatch(loadProfissoes()),
    onGetProfissionais: ()=>dispatch(loadProfissionais())
})

export default connect(null, mapDispatchToProps)(Home);
