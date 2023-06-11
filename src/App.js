import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import ContactMe from './components/ContactMe/ContactMe'

const App = () => {
  return (
    <div className='App'>
     <Navbar />
     <Home />
     <Skills />
     <ContactMe />
    </div>
  )
}

export default App
