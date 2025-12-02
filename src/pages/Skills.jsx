import React from 'react';
import Selection from '../components/Selection';
import '../style/Skills.css'; 

const convertNivelToPercent = (nivel) => {
    switch (nivel) {
        case 'Intermediário':
            return 60; 
        case 'Avançado':
            return 85; 
        case 'Em Estudo':
            return 20; 
        default:
            return 0;
    }
};

const DevSkills = [
    { nome: "HTML5 & CSS3", nivel: "Intermediário", icone: "🌐", tipo: "dev" },
    { nome: "JavaScript (ES6+)", nivel: "Intermediário", icone: "💻", tipo: "dev" },
    { nome: "ReactJS", nivel: "Intermediário", icone: "⚛️", tipo: "dev" },
    { nome: "Git & GitHub", nivel: "Em Estudo", icone: "🐙", tipo: "dev" },
    { nome: "UX/UI Design", nivel: "Em Estudo", icone: "📐", tipo: "dev" },
    { nome: "Design Responsivo", nivel: "Em Estudo", icone: "📱", tipo: "dev" },
    { nome: "Vite/Webpack", nivel: "Em Estudo", icone: "⚡", tipo: "dev" },
    { nome: "Context API & Redux", nivel: "Em Estudo", icone: "🔄", tipo: "dev" },
    { nome: "Python", nivel: "Em Estudo", icone: "🐍", tipo: "dev" },
    { nome: "Java & POO", nivel: "Em Estudo", icone: "☕", tipo: "dev" },
    { nome: "C#", nivel: "Em Estudo", icone: "🔷", tipo: "dev" },
];

const ArtSkills = [
    { nome: "Ilustração Digital (Chibi)", nivel: "Avançado", icone: "✏️", tipo: "art" },
    { nome: "Design de Emotes p/ Streaming", nivel: "Intermediário", icone: "👾", tipo: "art" },
    { nome: "Branding Visual (Stream)", nivel: "Intermediário", icone: "🖼️", tipo: "art" },
    { nome: "Adobe Photoshop", nivel: "Intermediário", icone: "♦️", tipo: "art" },
    { nome: "Adobe Illustrator", nivel: "Intermediário", icone: "🔸", tipo: "art" },
    { nome: "Criação de Personagens", nivel: "Intermediário", icone: "👤", tipo: "art" },
    { nome: "Layouts Personalizados", nivel: "Intermediário", icone: "✨", tipo: "art" },
];


const Skills = () => {
    return (
        <section className="skills-page">
            
            <Selection 
                title="Minhas Habilidades"
                subtitle="Meu Nível de Desenvolvimento e Arte Digital."
            />

            <div className="skills-content rpg-status-layout">
                
                <div className="skills-col rpg-window">
                    
                    <div className="rpg-grid-container">
                        
                        <div className="rpg-column dev-column">
                            <h4 className="rpg-group-title">Desenvolvimento Front-end</h4>
                            <ul className="skills-list">
                                {DevSkills.map((skill, index) => {
                                    const percentual = convertNivelToPercent(skill.nivel);
                                    const nivelText = skill.nivel === 'Em Estudo' ? 'Em Estudo' : `${percentual}%`;
                                    
                                    return (
                                        <li 
                                            key={`dev-${index}`} 
                                            className={`skill-item ${skill.nivel === 'Em Estudo' ? 'skill-in-progress' : ''}`}
                                        >
                                            <span className="skill-icon">{skill.icone}</span>
                                            <span className="skill-name">{skill.nome}</span>
                                            <div className="skill-progress-bar">
                                                <div 
                                                    className="skill-progress-fill" 
                                                    style={{ width: `${percentual}%` }}
                                                ></div>
                                            </div>
                                            <span className="skill-level">{nivelText}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="rpg-column art-column">
                            <h4 className="rpg-group-title">Ilustração & Design Digital</h4>
                            <ul className="skills-list">
                                {ArtSkills.map((skill, index) => {
                                    const percentual = convertNivelToPercent(skill.nivel);
                                    const nivelText = `${percentual}%`;

                                    return (
                                        <li key={`art-${index}`} className="skill-item">
                                            <span className="skill-icon">{skill.icone}</span>
                                            <span className="skill-name">{skill.nome}</span>
                                            <div className="skill-progress-bar">
                                                <div 
                                                    className="skill-progress-fill" 
                                                    style={{ width: `${percentual}%` }}
                                                ></div>
                                            </div>
                                            <span className="skill-level">{nivelText}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;