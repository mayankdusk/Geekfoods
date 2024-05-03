import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Descriptions from './Components/Description/Descriptions.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Descriptions />
  </React.StrictMode>,
)
