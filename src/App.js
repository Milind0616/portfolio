import React, { useState } from 'react';
import './App.css';
import BMWBackground from './components/BMWBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <div className="grid-pattern"></div>
      <BMWBackground />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
