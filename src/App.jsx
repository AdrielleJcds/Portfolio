import React from 'react';
// Trocamos BrowserRouter por HashRouter para funcionar no GitHub Pages
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Arts from './pages/Arts';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    /* O HashRouter adiciona um /#/ na URL, o que impede o erro 404 no GitHub */
    <HashRouter>
      <Header />
      
      <main>
        <Routes>
          {/* Rota principal que carregará sua Home automaticamente */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/artes" element={<Arts />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;