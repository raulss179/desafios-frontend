import  React, { useState } from 'react';
import './FormComponent.css'

function FormComponent() {
    const [nome, setNome] = useState ('');
    const [sobrenome, setSobrenome] = useState ('');
    const [email, setEmail] = useState ('');
    const [whatsApp, setWhatsapp] = useState ('');
    const [texto, setTexto] = useState ('');

    
    const handleSubmit = (e) => {e.preventDefault();
    //enviar dados do formulario
    console.log('Dados Enviados:', {nome, sobrenome, email, whatsApp, texto});
    //limpar campos do formulario
    setNome('');
    setSobrenome('');
    setEmail('');
    setWhatsapp('');
    setTexto('');

    };
return(
    <form className='form-box' onSubmit={handleSubmit}>
    <h2> Entre em contato</h2>
    <input type='text' placeholder='Nome' value={nome} onChange={(e)=>setNome(e.target.value)}/>
    <br/>

    <input type='text' placeholder='Sobrenome' value={sobrenome} onChange={(e)=>setSobrenome(e.target.value)}/>
    <br/>

    <input type='email' placeholder='E-Mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>

    <input type='text' placeholder='WhatsApp' value={whatsApp} onChange={(e)=>setWhatsapp(e.target.value)}/>
    <br/>
    <textarea value={texto} placeholder='Escreva para nos!!' onChange={(e)=>setTexto(e.target.value)}/>
    <button type='submit'>Enviar</button>
    </form>
);

}

export default FormComponent;