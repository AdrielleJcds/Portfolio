## 🛠️ README: Portfólio Pessoal 💻

Olá\! Este é o repositório do meu portfólio, criado para mostrar minhas habilidades em **Desenvolvimento Front-end** e **Design Digital**.

O projeto foi construído usando **React** para ser **fácil de atualizar** e com um design **responsivo** e moderno.

-----

### ✨ Tecnologias Principais

  * **Front-end:** **React** e **Vite** (para velocidade).
  * **Estilo:** **CSS3** (com variáveis para cores).
  * **Linguagem:** **JavaScript** (ES6+).

-----

### 🏗️ Manutenção Simples

A estrutura é modular, o que simplifica a manutenção:

1.  **Componentes:** Uso de componentes React (como `Header`, `Footer`, `ProjectCard`) para reutilizar partes do código.
2.  **Dados:** Para adicionar ou editar informações (projetos, habilidades, contatos), basta mudar os **arrays de dados** nos arquivos das páginas (`Projects.jsx`, `Skills.jsx`).
3.  **Tema:** As cores principais são definidas em variáveis CSS (`:root`). Mudar o tema é feito alterando apenas essas variáveis.

PORTFOLIO_JINNIE/
├── node_modules/       // Dependências do projeto (gerenciadas pelo npm/yarn)
├── public/
├── src/
│   ├── Assets/         // Imagens, ícones, fontes e outros recursos estáticos
│   │   ├── (arquivos de imagem como avatar, emotes, etc.)
│   ├── components/     // Componentes reutilizáveis (UI)
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Selection.jsx   // Componente para Títulos e Subtítulos
│   ├── pages/          // Layouts de página (rotas)
│   │   ├── About.jsx       // Página 'Sobre Mim'
│   │   ├── Arts.jsx        // Página 'Artes' / Portfólio Digital
│   │   ├── Home.jsx        // Página Inicial
│   │   ├── Projects.jsx    // Página 'Projetos de Desenvolvimento'
│   │   ├── Skills.jsx      // Página 'Habilidades' (com tema RPG)
│   ├── style/          // Arquivos CSS dedicados a componentes/páginas
│   │   ├── About.css
│   │   ├── Arts.css
│   │   ├── Footer.css
│   │   ├── Global.css      // Variáveis de Tema (Cores) e Reset CSS
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Projects.css
│   │   ├── Selection.css
│   │   ├── Skills.css
│   ├── App.jsx         // Componente Principal (Roteamento - React Router DOM)
│   ├── main.jsx        // Ponto de Entrada do React (Renderização)
│   └── (outros arquivos de configuração)
├── .gitignore
├── index.html          // Template HTML base (Vite)
├── package.json        // Dependências e Scripts
├── README.md           // Documentação do projeto (como o que acabamos de criar)
└── vite.config.js      // Configuração do Vite

-----

**© 2025 Adrielle J. C. D. S.**