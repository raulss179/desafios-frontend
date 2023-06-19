import React , {useState, useEffect} from 'react';
import './Header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <div className='Header' style= {{ display: isVisible ? 'block' : 'none',position: isVisible ? 'fixed' : 'none', top: isVisible ? '0' : '-50px' }} >
        
        <div className='menu_options_desktop'>
        <img src={require('./img/logo.png')} alt='Logo da pagina'/>
          <ul>
            <li><a href="/solucoes">Soluções</a></li>
            <li><a href="/sobre">Clientes</a></li>
            <li><a href="/precos">Preços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </div>

  );
}

export default Header;
