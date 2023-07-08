import React , {useState} from 'react';
import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { BsPersonCheckFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { MdContactPhone } from 'react-icons/md';

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
            <li><a href="#secao01"><MdMiscellaneousServices/> Soluções</a></li>
            <li><a href="#secao02"><BsPersonCheckFill/> Clientes</a></li>
            <li><a href="#"><GiPriceTag/> Preços</a></li>
            <li><a href="#secao04"><MdContactPhone/> Contato</a></li>
          </ul>
        </nav>
      )}

    </header>
  );
}
<div className='logo_header'>LOGO AQUI</div>
export default Menu;


