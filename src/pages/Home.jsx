import React from 'react';
import '../style/Home.css';
import PerfilImage from '../assets/perfil.png'; 
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importando ícones

const Home = () => {
  // links de contato 
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/adrielle-santos-seu-perfil",
    github: "https://github.com/AdrielleJcds",
    instagram: "https://www.instagram.com/jinnie_artz",
  };

  return (
    <section className="home-container">
      
      <div className="home-content">
        
        {/* Imagem do Perfil em Destaque */}
        <div className="perfil-wrapper">
          <img 
            src={PerfilImage} 
            alt="Jinnie | Desenvolvedora e Artista" 
            className="perfil-img" 
          />
        </div>

        <div className="home-text">
          <p className="saudacao">Olá, eu sou</p>
          <h1 className="nome-principal">Adrielle Santos</h1>
          <h2 className="profissao">Estudante de Engenharia de Software | Front-end & Design</h2>
          
          <p className="resumo">
            Sou futura estudante de Engenharia de Software (Anhanguera - 2026), com interesse em desenvolvimento.
            Venho do design e aplico isso na criação de interfaces simples, bem estruturadas e funcionais.
          </p>
          
          {/* Botões de Chamada para Ação */}
          <div className="cta-links">
            <a href="projetos" className="btn-cta btn-dev">💻 Ver Projetos Dev</a>
            <a href="artes" className="btn-cta btn-art">🎨 Ver Portfolio de Artes</a>
          </div>

          {/* NOVO: Links de Redes Sociais */}
          <div className="social-links">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram (@jinnie_artz)">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Home;