import React from 'react';
import '../style/About.css';
import { 
    FaMapMarkerAlt, FaEnvelope, FaCalendarAlt, FaLinkedin, FaCode, FaPaintBrush, 
    FaGraduationCap, FaCheckCircle, FaBriefcase 
} from 'react-icons/fa'; 
import AvatarImg from '../assets/avatar-chibi.png'; 

// 1. FUNÇÃO PARA CALCULAR IDADE (Mantida)
const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
};

// 2. DATA DE NASCIMENTO
const DATA_NASCIMENTO = '2003-09-18'; 
const idadeAtual = calcularIdade(DATA_NASCIMENTO);


const About = () => {
    const socialLinks = {
        email: "adrielle.dev@gmail.com", 
        linkedin: "in/jcds", 
        instagram: "@jinnie_artz", 
        localizacao: "Brasil"
    };

    return (
        <section className="sobre-mim-container">
            
            <div className="sobre-mim-conteudo">
                
                <h2 className="titulo-secao">Sobre Mim</h2>
                <h3 className="subtitulo-jinnie">Jinnie</h3>

                <div className="texto-revisado">
                    <p>
                        Sou <strong>Adrielle</strong>, conhecida como <strong>Jinnie</strong>. Atuo como desenvolvedora estudante de <strong>desenvolvimento</strong> e <strong>ilustradora digital</strong>.
                    </p>
                    
                    <p>
                        Minha ligação com a arte começou na infância, influenciada pelos desenhos que assistia. Ilustrações em estilo <strong>chibi/kawaii</strong> fazem parte do meu trabalho por unirem simplicidade, expressão e criatividade — características que valorizo até hoje.
                    </p>
                    
                    <p>
                        O interesse por tecnologia surgiu cedo. Sempre fui curiosa em explorar dispositivos além do uso comum, o que despertou meu interesse pela lógica por trás da tecnologia e pelo funcionamento dos sistemas. Essa curiosidade evoluiu para a admiração pelo processo de criação de jogos.
                    </p>

                    <p>
                        Iniciei um curso de design, onde tive meu primeiro contato com <strong>UX Design</strong>. Essa experiência abriu caminho para a tecnologia e me levou a conquistar uma bolsa em Front-end, reforçando minha vontade de, no futuro, criar meus próprios sistemas.
                    </p>
                    <p>
                        Atualmente sigo focada em desenvolvimento Front-end e iniciarei a graduação em <strong>Engenharia de Software em 2026</strong>. Sou curiosa, criativa e busco evoluir tecnicamente, aplicar boas práticas e entregar soluções bem feitas, sem excesso de enfeite.
                    </p>
                    <p>
                        <strong>JINNIE</strong> representa uma <strong>J</strong>ornada guiada pela <strong>i</strong>novação, com foco em <strong>n</strong>ecessidades reais, base sólida, <strong>i</strong>maginação aplicada e <strong>e</strong>xecução consciente.
                    </p>
                </div>

                <p className="chamada-final">
                    Disponível para projetos de Front-end e ilustração.
                </p>
            </div>

            <div className="contato-rapido-card">
                <div className="avatar-wrapper">
                    <img 
                        src={AvatarImg} 
                        alt="Avatar Jinnie Chibi" 
                        className="avatar-img" 
                    />
                </div>

                <h3 className="card-titulo">Contato & Status</h3>

                <div className="contato-info">
                    
                    <p className="contato-item">
                        <FaBriefcase className="icone" /> <strong>Emprego:</strong> Atendente Unimed (desde Jul/2024)
                    </p>
                    
                    <p className="contato-item destaque-status">
                        <FaCheckCircle className="icone" /> <strong>Disponível:</strong> Freelas de Ilustração
                    </p>
                    <p className="contato-item">
                        <FaCode className="icone" /> <strong>Área:</strong> Front-end (HTML, CSS, JS, React)
                    </p>
                    <p className="contato-item">
                        <FaGraduationCap className="icone" /><strong>Status:</strong> Estudante (Eng. Software 2026)
                    </p>
                    
                    <hr className="separador" />
                    
                    <p className="contato-item">
                        <FaCalendarAlt className="icone" /> <strong>Idade:</strong> {idadeAtual} anos 
                    </p>
                    <p className="contato-item">
                        <FaEnvelope className="icone" /> <strong>Email:</strong> {socialLinks.email}
                    </p>
                    <p className="contato-item">
                        <FaLinkedin className="icone" /> <strong>LinkedIn:</strong> {socialLinks.linkedin}
                    </p>
                    <p className="contato-item">
                        <FaMapMarkerAlt className="icone" /> <strong>Localização:</strong> {socialLinks.localizacao}
                    </p>
                </div>
                
                <a 
                    href={`mailto:${socialLinks.email}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-card-contato"
                >
                    Fale Comigo Agora
                </a>
                
            </div>
        </section>
    );
};

export default About;