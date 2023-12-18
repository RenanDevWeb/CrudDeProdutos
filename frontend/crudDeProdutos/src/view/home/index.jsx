import React from 'react'
import Menu from '../../components/Navbar'
import './index.css'


export default function Home() {
    console.log("pagina home");
  return (
    <div className='container'>
    <Menu />
    <div className='container-home'>Home</div>
    </div>
  )
}
