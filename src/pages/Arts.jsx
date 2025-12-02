import React from 'react';
import Selection from '../components/Selection.jsx'; 
import '../style/Arts.css';  
import AloneMorningEmotes from '../assets/AlonemEmotes.png'; 
import KreewHaitEmotes from '../assets/KreewEmotes.png'; 
import LekzxEmotes from '../assets/lekEmotes.png'; 
import MistEmotes from '../assets/mistyEmotes.png';
import Apontando from '../assets/sonossauro.png'; 

const ArtProjects = [
    {
        id: 1,
        cliente: "KreewHait",
        descricao: "Meu primeiro cliente como ilustradora. Emotes personalizados criados para lives cheias de interação e personalidade ❤️",
        imagem: KreewHaitEmotes,
        linkLive: "https://www.instagram.com/p/DPPxiOGjCaZ/", 
        categoria: "Post Instragram / Youtube @Haitzinho",
    },
    {
        id: 2,
        cliente: "AloneMorning",
        descricao: "Emotes e visual temático pensados para o estilo do canal. Desafiador, mas divertido — exigiu atenção a cada detalhe (que me custou uma sobrancelha 😅).",
        imagem: AloneMorningEmotes,
        linkLive: "https://www.twitch.tv/alonemorning", 
        categoria: "Live Emojis / Twitch",
    },
    {
        id: 3,
        cliente: "Lekzx",
        descricao: "Emotes cheios de ação e humor, feitos para funcionar nos momentos mais animados da live.",
        imagem: LekzxEmotes,
        linkLive: "https://www.instagram.com/p/DPPwtO5jKNq/", 
        categoria: "Post Instragram",
    },
    {
        id: 4,
        cliente: "Mist",
        descricao: "Design e ilustrações que misturam um estilo fofo e moderno, alinhados à identidade do canal.",
        imagem: MistEmotes,
        linkLive: "https://www.instagram.com/p/DPPyCDWDNUp/", 
        categoria: "Post Instragram",
    },
    {
        id: 5,
        cliente: "Meus Emotes Pessoais",
        descricao: "Criação dos meus próprios emotes para estudar, testar ideias e refinar meu estilo 🎨",
        imagem: Apontando,
        linkLive: "https://www.instagram.com/p/DRQmwAtjFWJ/?img_index=1", 
        categoria: "Post Instragram",
    },
];

const Arts = () => {
  return (
    <section className="arts-page">
      <Selection 
        title="Portfolio Digital"
        subtitle="Ilustrações, Emotes e Branding para a comunidade de streaming. Criatividade que conecta!"
      />

      <div className="arts-section-content">
        <div className="arts-grid">
          {ArtProjects.map((projeto) => (
            <div className="art-card" key={projeto.id}>
                <div className="card-header">
                    <span className="categoria">{projeto.categoria}</span>
                    <h3 className="cliente-nome">{projeto.cliente}</h3>
                </div>
                
                <div className="imagem-wrapper">
                    <img 
                        src={projeto.imagem} 
                        alt={`Arte para ${projeto.cliente}`} 
                        className="art-image" 
                    />
                </div>
                
                <div className="card-body">
                    <p className="descricao">{projeto.descricao}</p>
                    
                    <a 
                        href={projeto.linkLive} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-live"
                    >
                        🔗 Post Instragram / Live
                    </a>
                </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Arts;