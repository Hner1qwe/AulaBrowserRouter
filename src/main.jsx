 import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import Home from './Home/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={ <Home/> } />
    <Route path="/Produto" element={ <index/> } />
    <Route path="/Oferta" element={ <index/> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



