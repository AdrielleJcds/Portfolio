import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Arts from './pages/Arts';
import Skills from './pages/Skills';
import Projects from './pages/Projects'; 

function App() {
  return (
    // <BrowserRouter> envolve toda a aplicação e habilita o roteamento
    <BrowserRouter>
        <Header /> 

        {/* <main> é onde o conteúdo específico de cada página será renderizado */}
        <main>
            {/* <Routes> contém todos os caminhos possíveis */}
            <Routes>
                {/* Rota para a Página Inicial (URL: /) */}
                <Route path="/" element={<Home />} /> 
                <Route path="/sobre-mim" element={<About />} /> 
                <Route path="/artes" element={<Arts />} /> 
                <Route path="/habilidades" element={<Skills />} />
                <Route path="/projetos" element={<Projects />} />
            </Routes>
        </main>
        <Footer />
        
    </BrowserRouter>
  );
}

export default App;