import React from 'react';
import Selection from '../components/Selection';
import '../style/Skills.css'; 

const convertNivelToPercent = (nivel) => {
    switch (nivel) {
        case 'Avançado':
            return 90;
        case 'Intermediário':
            return 60; 
        case 'Iniciante':
            return 40;
        case 'Em Estudo':
            return 20; 
        default:
            return 0;
    }
};

const DevSkills = [
    { nome: "HTML5 & CSS3", nivel: "Intermediário", icone: "🌐" },
    { nome: "JavaScript (ES6+)", nivel: "Intermediário", icone: "💻" },
    { nome: "ReactJS", nivel: "Intermediário", icone: "⚛️" },
    { nome: "SQL", nivel: "Iniciante", icone: "🗄️" },
    { nome: "Git & GitHub", nivel: "Iniciante", icone: "🐙" },
    { nome: "Python", nivel: "Em Estudo", icone: "🐍" },
    { nome: "Java & POO", nivel: "Em Estudo", icone: "☕" },
    { nome: "C#", nivel: "Em Estudo", icone: "🔷" },
];

const ArtSkills = [
    { nome: "Ilustração Digital", nivel: "Avançado", icone: "✏️" },
    { nome: "Design de Emotes", nivel: "Intermediário", icone: "👾" },
    { nome: "Adobe Photoshop", nivel: "Intermediário", icone: "♦️" },
    { nome: "Branding Visual", nivel: "Iniciante", icone: "🖼️" },
];

const BonusSkills = [
    { nome: "Inglês Técnico", nivel: "Iniciante", icone: "🇺🇸" },
];

const Skills = () => {
    const renderSkillList = (skills) => (
        <ul className="skills-list">
            {skills.map((skill, index) => {
                const percentual = convertNivelToPercent(skill.nivel);
                return (
                    <li key={index} className="skill-item">
                        <span className="skill-icon">{skill.icone}</span>
                        <span className="skill-name">{skill.nome}</span>
                        <div className="skill-progress-bar">
                            <div 
                                className="skill-progress-fill" 
                                style={{ width: `${percentual}%` }}
                            ></div>
                        </div>
                        <span className="skill-level">{skill.nivel}</span>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <section className="skills-page">
            <Selection 
                title="Status"
                subtitle="Minha jornada em desenvolvimento, arte e idiomas."
            />

            <div className="skills-content rpg-status-layout">
                <div className="skills-col rpg-window">
                    <div className="rpg-grid-container">
                        
                        <div className="rpg-column">
                            <h4 className="rpg-group-title">⚔️ Linguagens & Dev</h4>
                            {renderSkillList(DevSkills)}
                        </div>

                        <div className="rpg-column">
                            <h4 className="rpg-group-title">🎨 Arte & Design</h4>
                            {renderSkillList(ArtSkills)}
                            
                            <h4 className="rpg-group-title" style={{ marginTop: '20px' }}>🌟 Bônus</h4>
                            {renderSkillList(BonusSkills)}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;