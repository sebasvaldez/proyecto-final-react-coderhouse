import React from 'react'
import ItemNotImg from './assets/perro-sorprendido.png'

const ItemNotFound = () => {
  return (
    <div className='title-not-found'>  
    
    <h1>Producto no encontrado</h1>
    <figure className='not-found'>
      <img src={ItemNotImg} alt="" />
    </figure>
    </div>
  )
}

export default ItemNotFound