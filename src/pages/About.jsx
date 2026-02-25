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
        Oi! Eu sou a <strong>Adrielle</strong>, mas dependendo de quem me pergunta, sou a <strong>Dri</strong> ou, para os amigos e clientes do mundo geek, a <strong>Jinnie</strong>.
    </p>
    
    <p>
        Minha história com a tecnologia começou cedo, aos 15 anos, quando mergulhei de cabeça no universo dos super-heróis. Cresci fascinada pela genialidade do <strong>Homem de Ferro</strong> e seu sonho — que hoje é o meu — de construir o meu próprio "Jarvis" ou uma "Sexta-feira". Quero usar a tecnologia para automatizar tarefas, otimizar o tempo e, acima de tudo, criar soluções que ajudem pessoas.
    </p>

    <p>
        Como todo bom herói, entendo que a responsabilidade é parte do processo. E, assim como o <strong>Miles Morales</strong>, meu Homem-Aranha favorito, não vivo só de lógica: a arte é o meu refúgio. Nas horas vagas, me transformo em <strong>artista digital</strong>, criando ilustrações fofinhas que exercitam minha criatividade e equilibram meu dia a dia.
    </p>

    <p>
        Para mim, ser desenvolvedora é isso: unir o pensamento analítico de uma futura <strong>Engenheira de Software (2030)</strong> com a liberdade criativa de quem gosta de desenhar. Busco aplicar boas práticas e entregar soluções bem feitas, unindo <strong>UX Design</strong> e desenvolvimento Front-end.
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
                        <FaBriefcase className="icone" /> <strong>Emprego: </strong> Atendente de Farmácia - Unimed 
                    </p>
                    
                    <p className="contato-item destaque-status">
                        <FaCheckCircle className="icone" /> <strong>Disponível:</strong> Freelas de Ilustração
                    </p>
                    <p className="contato-item">
                        <FaCode className="icone" /> <strong>Área:</strong> Front-end (HTML, CSS, JS, React)
                    </p>
                    <p className="contato-item">
                        <FaGraduationCap className="icone" /><strong>Status:</strong> Estudante Engenharia Software
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
                
    
                
            </div>
        </section>
    );
};

export default About;