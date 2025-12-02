import React, { useState } from 'react'; // Importa useState
import { Link, useLocation } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
  const location = useLocation();
  // 1. Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Função para abrir/fechar o menu ao clicar no botão
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Artes', path: '/artes' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Habilidades', path: '/habilidades' },
    { name: 'Sobre Mim', path: '/sobre-mim' },
  ];

  return (
    <header className="header-nav">
      <div className="logo-container">
        <Link to="/" className="logo">Jinnie</Link>
      </div>
      
      {/* 2. Botão do Menu Hambúrguer (Visível apenas no Mobile/Tablet via CSS) */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        // Atributo importante para acessibilidade e CSS (transforma em 'X')
        aria-expanded={isMenuOpen} 
        aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
      >
        {/* Usamos o span para criar o ícone com CSS */}
        <span className="hamburguer-icon"></span>
      </button>

      {/* 3. Navegação: Aplica a classe 'menu-open' se o menu estiver aberto */}
      <nav className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
                onClick={handleLinkClick} // Fecha o menu ao clicar no link
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;