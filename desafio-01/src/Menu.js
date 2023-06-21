import React , {useState} from 'react';
import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <header className={isMenuOpen ? 'menu-open' : ''}>

      <button className='menu_toggle' onClick={toggleMenu} ><GiHamburgerMenu/>
      </button>
      {isMenuOpen && (
        <nav className='menu_options'>
          <ul>
            <li><a href="#secao01">Soluções</a></li>
            <li><a href="#secao02">Clientes</a></li>
            <li><a href="#secao03">Preços</a></li>
            <li><a href="#secao04">Contato</a></li>
          </ul>
        </nav>
      )}

    </header>
  );
}
<div className='logo_header'>LOGO AQUI</div>
export default Menu;


