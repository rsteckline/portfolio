import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import CurrentWork from './components/CurrentWork';
// import Challenges from './components/Challenges';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Intro />
        </section>
        <section>
          <CurrentWork />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="challenges">
          <Challenges />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
