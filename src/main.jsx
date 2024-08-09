import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoutes>
    <Routes>
    <Route path="/Home" element={ <home/> } />
    <Route path="/Produto" element={ <produto/> } />
    <Route path="/Oferta" element={ <oferta/> } />
    </Routes>
    </BrowserRoutes>
  </React.StrictMode>,
)



