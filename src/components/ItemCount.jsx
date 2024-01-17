import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import '../assets/styles/style.css'
import { Link } from 'react-router-dom'

const ItemCount = ({onBuyClick}) => {
    const [count, setCount] = useState(0)

    const mostrarMensaje = () => {
        alert(`Has agregado al carrito ${count} unidades seleccionadas`)
    }

    const sumar = () => {
        if(count < 10) {
            setCount( count + 1 )
        }
    }

    const restar = () => {

        if(count > 0){
            setCount(count - 1)
        }
    }


    const handleBuyClick = () => {
      onBuyClick(count)
      mostrarMensaje()
    }

  return (
    <div className='container_btn_itemCount'>
      <Button onClick={sumar}>+</Button>
      <Button onClick={handleBuyClick} className='button-mid' >Agregar al carrito {count}</Button>
      <Button onClick={restar}> - </Button>

      <br />
      <Link to={'/'}>
        <Button>
          Volver al inicio
        </Button>
      </Link>
    </div>
    
     
   
  )
}

export default ItemCount