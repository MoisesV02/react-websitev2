import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
// import Footer from './components/pages/Footer'
import Game from './components/pages/Game'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import SimpleRpgs from './components/pages/SimpleRpgs'
import GalacticWars from './components/pages/GalacticWars'
import Reaction from './components/pages/Reaction'
import Meteors from './components/pages/Meteors'
import SynthHero from './components/pages/SynthHero'
import HelicopterGame from './components/pages/HelicopterGame'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='simple-rpgs' exact element={<SimpleRpgs />} />
        <Route path='/galactic-wars' exact element={<GalacticWars />} />
        <Route path='/reaction' exact element={<Reaction />} />
        <Route path='/meteors' exact element={<Meteors />} />
        <Route path='/synth-hero' exact element={<SynthHero />} />
        <Route path='/helicopter-game' exact element={<HelicopterGame />} />
        <Route path='/games' exact element={<Game />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/about' exact element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  )
}

export default App
