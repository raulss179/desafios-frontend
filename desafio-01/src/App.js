import React from 'react';
import Menu from './Menu'; // Importe o componente menu corretamente
import Header from './Header';
import './App.css';
import Corpo from './Corpo';
import StarBackground from './StarBackground';
import Footer from './Footer';

function App() {

  return (
    <div className='background-geral'>
      <StarBackground/><Menu/><Header/><Corpo/><Footer/> {/* Use o componente menu dentro do JSX */ }
    
    </div>
  );
}


export default App;
