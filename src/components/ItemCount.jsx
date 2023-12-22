import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import '../assets/styles/style.css'


const ItemCount = () => {
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



  return (
    <div>
      <Button onClick={sumar}>+</Button>
      <Button onClick={mostrarMensaje} className='button-mid'>Agregar al carrito {count}</Button>
      <Button onClick={restar}> - </Button>
    </div>
  );
}

export default ItemCount