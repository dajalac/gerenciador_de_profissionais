/* eslint-disable prefer-const */
/* eslint-disable no-console */

import React,{useEffect} from 'react';

import { useHistory} from 'react-router-dom';
import {Work, 
     AddCircle, 
     Person, 
     PersonAdd} from '@material-ui/icons';
import Card from '../components/Cards/card';
import auth0Client from '../auth0/Auth0';
import './Home.css'


function Home() {

    // vai chamar a login page do auth0

    useEffect(() => {
        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
        }
      },[]);

      
    let history = useHistory();

    const onListarProfissionais=(()=>{
        
        history.push('/listarProfissionais')
    });
    
    const onListarProfissao =(()=>{
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




export default Home;
