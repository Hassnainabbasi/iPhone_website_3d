import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Practice from './rough_work/practice'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'

function App() {

  return (
  <main>
    <Navbar />
    <Hero />
    <Highlight />
  </main>
     
  )
}

export default App
