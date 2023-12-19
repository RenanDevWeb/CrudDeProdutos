import React,{useEffect, useState} from 'react'
import axios from 'axios';
import './index.css'


export default function Produtos() {
 const [produtos,setProdutos] = useState([])

   useState(() => {
     getProdutos()
   },[])


  async function getProdutos(){
    axios.get('http://localhost:3000/produtos')
    .then(function (response) {
      // aqui acessamos o corpo da resposta:
      setProdutos(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
      console.log(error);
    })
    }



    return (
  
 
      <div className='produtos'>
      <table>
        <thead>
          <tr>
            <th>Código do Produto</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(product => (
            <tr key={product.codigoProduto}>
              <td>{product.codigoProduto}</td>
              <td>{product.nome}</td>
              <td>{product.descrisao}</td>
              <td>R$ {product.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    
    )
  }
  


 
