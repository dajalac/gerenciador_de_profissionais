/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars}from 'react-icons/fa';
import{AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons'; // to change icons color
import './Navbar.css'


function Navbar() {

    const[showSideBar, setShowSideBar ] = useState(false); // sidebar não aparacerá inicialmente

    // Esse método vai set a variavel showSideBar para o valor opost do seu atual estado
    const displaySidebar =()=>{
        setShowSideBar(!showSideBar);
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff2df' }}> 
            <div className ="navbar">
                < FaBars className='navbar-burger-menu' onClick={displaySidebar} onKeyDown={displaySidebar}/>
                <div className='navbar-signout-menu'>sign out</div>
            </div>

            <nav className={showSideBar ? 'navbar-sidebar-active' : 'navbar-sidebar'}>
                <ul className='navbar-sidebar-items' onClick={displaySidebar} onKeyDown={displaySidebar}>
                    <li className='navbar-toggle'>
                        <AiOutlineClose className= 'navbar-burger-menu'/>
                    </li>
                    <li className ='navbar-sidebar-links'>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li className ='navbar-sidebar-links'>
                        <Link to ='/listarProfissionais'>Ver Profissionais</Link>
                    
                    </li>
                    <li className ='navbar-sidebar-links'>
                        <Link to ='/novoProfissional'> Cadaster Profissional</Link>
                    </li>
                    <li className ='navbar-sidebar-links'>
                        <Link to ='/listarProfissoes'>Ver Profissoes</Link>
                    </li>
                    <li className ='navbar-sidebar-links'>
                        <Link to ='/novaProfissao'> Cadaster Profissao</Link>
                    </li>
                    <li className ='navbar-sidebar-links sidebar-signout-menu'>
                        {/* For now it will direct to home page */}
                        <Link to ='/'>Sign out</Link> 
                    </li>
                    
                </ul>

            </nav>
            </IconContext.Provider>
        </>
       
    )
}

export default Navbar
