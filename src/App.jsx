import { React } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Timeline from './components/Timeline'

function App() {

  return (
      <div className='App'>
        <Intro />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
