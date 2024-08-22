 import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import Home from './Home/Home'
import Produto from './Produto/Produto'
import Oferta from './Oferta/Oferta'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Produto" element={ <Produto/> } />
    <Route path="/Oferta" element={ <Oferta/> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



