import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <section>
          <Intro />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

