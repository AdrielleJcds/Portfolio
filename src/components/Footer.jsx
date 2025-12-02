import React from 'react';
import '../style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-principal">
        <div className="footer-info">
          <h3>Jinnie</h3>
          <p>© 2025 Jinnie - Ilustração & Desenvolvimento.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        
        <div className="footer-links">
          <h4>Conecte-se</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/ajcds" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/AdrielleJcds" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.instagram.com/jinnie_artz" target="_blank" rel="noopener noreferrer">Instagram de Artes</a></li>
            <li><a href="https://discord.gg/wHGQxsdkQt" target="_blank" rel="noopener noreferrer">Discord Comunidade de Artes</a></li>
          </ul>
        </div>

        {/* --- NAVEGAÇÃO PRINCIPAL --- */}
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="artes">Artes</a></li>
            <li><a href="projetos">Projetos Dev</a></li>
             <li><a href="habilidades">Habilidades</a></li>
            <li><a href="sobre-mim">Sobre Mim</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-extra">
        <p> Quer ver mais obras? <a href="https://www.instagram.com/jinnie_artz" target="_blank" rel="noopener noreferrer">Conheça meu Instagram!</a></p>
      </div>
    </footer>
  );
};

export default Footer;