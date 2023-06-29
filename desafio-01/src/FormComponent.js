import React, { useState } from 'react';
import './FormComponent.css';

function FormComponent() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [texto, setTexto] = useState('');

  const [nomeError, setNomeError] = useState('');
  const [sobrenomeError, setSobrenomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [WhatsAppError, setWhatsAppError] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
    setNomeError('');
  };

  const handleSobrenomeChange = (e) => {
    setSobrenome(e.target.value);
    setSobrenomeError('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError('');
  };
  const handleWhatsAppChange = (e) => {
    const formattedWhatsApp = formatPhoneNumber(e.target.value);
    setWhatsApp(formattedWhatsApp);
    setWhatsAppError('');
  };
  const formatPhoneNumber = (phoneNumber) => {
    // Remove todos os caracteres não numéricos
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Aplica a formatação (--) ----- - ----
    let formattedPhoneNumber = cleanedPhoneNumber.slice(0, 2);
    if (cleanedPhoneNumber.length > 2) {
      formattedPhoneNumber += ' ' + cleanedPhoneNumber.slice(2, 7);
    }
    if (cleanedPhoneNumber.length > 7) {
      formattedPhoneNumber += '-' + cleanedPhoneNumber.slice(7, 8);
    }
    if (cleanedPhoneNumber.length > 8) {
      formattedPhoneNumber += '' + cleanedPhoneNumber.slice(8, 11);
    }

    return formattedPhoneNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!/^[a-zA-Z]+$/.test(nome) || nome.trim() === '') {
      setNomeError('O campo NOME deve ser preenchido apenas com letras!');
      hasError = true;
    }

    if (!/^[a-zA-Z]+$/.test(sobrenome) || sobrenome.trim() === '') {
      setSobrenomeError('O campo SOBRENOME deve ser preenchido apenas com letras!');
      hasError = true;
    }

    if (
      email.trim() !== '' &&
      (!email.includes('@') || !email.includes('.com'))
    ) {
      setEmailError('É necessario adicionar no campo E-MAIL "@" e ".com"!');
      hasError = true;
    }

    if (!/\d{2} \d{5}-\d{4}/.test(whatsApp) ||
    whatsApp.trim() === ''
  ) {
      setWhatsAppError('O campo "WhatsApp" deve ser preenchido no seguinte formato (00) 00000-0000');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Enviar dados do formulário
    console.log('Dados Enviados:', { nome, sobrenome, email, whatsApp, texto });
    // Limpar campos do formulário
    setNome('');
    setSobrenome('');
    setEmail('');
    setWhatsApp('');
    setTexto('');
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Entre em contato</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={handleNomeChange}
      />
      <p className="error-message">{nomeError}</p>
      <br />

      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={handleSobrenomeChange}
      />
      <p className="error-message">{sobrenomeError}</p>
      <br />

      <input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={handleEmailChange}
      />
      <p className="error-message">{emailError}</p>
      <br />

      <input
        type="text"
        placeholder="WhatsApp (00) 00000-0000"
        value={whatsApp}
        onChange={handleWhatsAppChange}
      />
      <p className="error-message">{WhatsAppError}</p>
      <br />
      <textarea
        value={texto}
        placeholder="Escreva para nós!!"
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormComponent;
