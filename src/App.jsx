import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Practice from './rough_work/practice'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Feature from './components/Feature'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {

  return (
  <main>
    <Navbar />
    <Hero />
    <Highlight />
    <Model />
    <Feature />
    <HowItWorks />
    <Footer />
  </main>
     
  )
}

export default App
