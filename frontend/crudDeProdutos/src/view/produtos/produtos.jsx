import React from 'react'
import  Menu from '../../components/Navbar'
import  Produtos from '../../components/Produtos'
import "./index.css"


function ProdutosPage() {
return (
<div className='container'>
  <Menu className="nav"/>
  <Produtos className="produtos"/>
  </div>
  )
}

export default ProdutosPage
