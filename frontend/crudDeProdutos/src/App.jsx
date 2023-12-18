import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import ProdutosPage from './view/produtos/produtos';
import Home from './view/home';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produtos" element={<ProdutosPage />} />
            
      </Routes>
    </BrowserRouter>
  )
}

export default App
