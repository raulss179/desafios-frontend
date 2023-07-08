import  React, { useState } from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';





function FooterComponent() {

    return (
   
    
      
        <div className='footer'>
           <div className='menu_options_desktop_footer'>
        <h2>Menu de acesso rápido</h2>
        <ul>
          <li><a href="#secao01">Soluções</a></li>
          <li><a href="#secao02">Clientes</a></li>
          <li><a href="#secao03">Preços</a></li>
          <li><a href="#secao04">Contato</a></li>
        </ul>
      </div>

      <div className='social_icons'>
      <a href='#'><BsGithub/></a> 
       <a href='#'><BsInstagram/></a> 
       <a href='#'><BsWhatsapp/></a> 
       <a href='#'><BsStackOverflow/></a> 
       <a href='#'><BsFacebook/></a> 
       
   
        <a href='#'><img src={require('./img/logo01.png')} alt='Logo da pagina'/></a>
        <h2>copyright todos os direitos Reservados</h2><br/>

     
        </div>
        </div>
    );
  }

export default FooterComponent;