import React from 'react';
import Selection from '../components/Selection';
import '../style/Projects.css'; 

const DevProjects = [
    {
        id: 1,
        titulo: "(Em Criação 🚧)",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tecnologias: ["JavaScript", "Css", "HTML"],
        linkDemo: "#", 
        linkRepo: "https://github.com/AdrielleJcds/e-learning-platform-repo", 
    },
    {
        id: 2,
        titulo: " (Em Criação 🚧)",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tecnologias: ["Next.js", "Tailwind CSS", "MongoDB", "Auth.js"],
        linkDemo: "#", 
        linkRepo: "https://github.com/AdrielleJcds/e-learning-platform-repo", 
    },
    {
        id: 3,
        titulo: "Portfólio Pessoal (Este mesmo!)",
        descricao: "Portfólio responsivo e moderno, combinando design artístico com princípios de desenvolvimento Front-end limpo e de fácil manutenção.",
        tecnologias: ["React", "Vite", "CSS Modular", "Responsividade"],
        linkDemo: "/", 
        linkRepo: "https://github.com/AdrielleJcds/portfolio-jinnie", 
    },
];

const Projects = () => {
  return (
    <section className="projects-page">
      
      <Selection 
        title="Projetos de Desenvolvimento"
        subtitle="Construindo interfaces Front-end robustas, intuitivas e ricas em detalhes visuais."
      />

      <div className="projects-section-content">
        
        <div className="projects-grid">
          {DevProjects.map((projeto) => (
            <div className="project-card" key={projeto.id}>
              
              <h3 className="project-title">{projeto.titulo}</h3>
              <p className="project-description">{projeto.descricao}</p>
              
              <div className="project-techs">
                <h4>Tecnologias Utilizadas:</h4>
                <div className="tech-tags">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a 
                  href={projeto.linkRepo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link btn-repo"
                >
                  GitHub (Código)
                </a>
                <a 
                  href={projeto.linkDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link btn-demo"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="github-cta">
            <p>Veja mais projetos e contribuições no meu perfil:</p>
            <a href="https://github.com/AdrielleJcds" target="_blank" rel="noopener noreferrer" className="btn-github">
                🐙 AdrielleJcds no GitHub
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;