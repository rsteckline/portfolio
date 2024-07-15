import { React } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
