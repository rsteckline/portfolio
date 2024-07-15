import { React } from 'react'
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
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
