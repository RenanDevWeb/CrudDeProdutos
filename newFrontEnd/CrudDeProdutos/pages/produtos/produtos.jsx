import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Menu from '../../components/navbar/index'
import { FaFilePen, FaRegEye ,FaTrash} from "react-icons/fa6";
import './produtos.css'

export default function produtos() {
  const [produtos,setProdutos] = useState([])

   useEffect(() => {
     getProdutos()

   }, [])


   async function getProdutos  () {
    try {
        const response = await axios.get('http://localhost:3000/produtos')
        setProdutos(response.data)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
   }




  return (
    <div className='container-produtos '>

        <Menu />


     
     <div className="container-fluid m-5">

     <Button className='m-1' variant="primary"><FaFilePen /> Inserir Novo</Button>
    
   <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Codigo do Produto</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      {produtos.map(item => (
        <tr>
            <td>{item.codigoProduto}</td>
            <td>{item.nome}</td>
            <td>{item.descrisao}</td>
            <td>{`R$ ${item.preco.toFixed(2)}`}</td>
            <td className='button-actions'>
            <Button className='m-1' variant="info"><FaRegEye /> Ver</Button>
            <Button variant="warning m-1"><FaFilePen /> Editar</Button>
            <Button variant="danger m-1"><FaTrash /> Deletar</Button>

            </td>
        </tr>

        
    ))}





      </tbody>
    </Table>
    </div>


    

    </div>
  )
}
