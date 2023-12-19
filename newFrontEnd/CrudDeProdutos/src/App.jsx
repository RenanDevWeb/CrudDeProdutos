import Home from '../pages/home/home'
import Produtos from "../pages/produtos/produtos";
import AddProduto from "../pages/addProduto";
import UpdateProduto from "../pages/updateProduto";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  

  return (
    <>
     <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home />} /> 
            <Route exact path="/produtos" element={<Produtos />} />
            <Route exact path="/add" element={<AddProduto />} />
            <Route exact path="/update" element={< UpdateProduto/>} />
            
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
