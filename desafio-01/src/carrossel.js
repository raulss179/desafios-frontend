import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './carrossel.css'; // Importe o arquivo de estilos

const Carrossel = ({ dados, intervalo }) => {
  const [indice, setIndice] = useState(0);
  const carrosselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Avança para a próxima imagem no carrossel
      setIndice((indice) => (indice + 1) % dados.length);
    }, intervalo);

    return () => clearInterval(timer); // Limpa o temporizador quando o componente é desmontado
  }, [dados.length, intervalo]);

  useEffect(() => {
    if (dados && dados.length > 0) {
      const timer = setInterval(() => {
        setIndice((indice) => (indice + 1) % dados.length);
      }, intervalo);
  
      return () => clearInterval(timer);
    }
  }, [dados, intervalo]);
  
  return (
    <div className="carrossel" ref={carrosselRef}>
      {/* Componente TransitionGroup para gerenciar as transições */}
      <TransitionGroup component={null}>
        <CSSTransition
          key={indice}
          timeout={500}
          classNames="fade"
          nodeRef={carrosselRef}
        >
          {/* Imagem do carrossel */}
          <img
            src={dados[indice].dados}
            alt={`Imagem ${indice}`}
            className="carrossel-imagem"
          />
        </CSSTransition>
      </TransitionGroup>
  
      {/* Parágrafo abaixo de cada imagem */}
      <p className="carrossel-paragrafo">{dados[indice].paragrafo}</p>
    </div>
  );
};

export default Carrossel;

