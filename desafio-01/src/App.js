import React from 'react';
import Menu from './Menu'; // Importe o componente menu corretamente
import Header from './Header';
import './App.css';
import Corpo from './Corpo';

function App() {
  return (
    <div>
      <Menu/><Header/><Corpo/> {/* Use o componente menu dentro do JSX */}
    </div>
  );
}

export default App;
