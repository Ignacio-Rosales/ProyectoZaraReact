import React, {useContext, useState} from 'react'
import { Button } from '@chakra-ui/react'
import '../assets/styles/style.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const ItemCount = ({ id, precio, imagen }) => {
    const {cart, setCart} = useContext(CartContext);
    const [counter, setCounter] = useState(1);

    const restar = () => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        alert("No hay más productos para quitar del carrito.")
      }
    };
  
    const sumar= () => {
      setCounter(counter + 1);
    };
  
    const addToCart = () => {
      setCart((cartAtm) => {
        const alrdyIn = cartAtm.find((item) => item.id === id);
  
        if (alrdyIn) {
          return cartAtm.map((item) => {
            if (item.id === id) {
              return { ...item, stock: item.stock + counter }
            } else {
              return item
            }
          })
        } else {
          return [...cartAtm, { id, stock: counter, precio, imagen  }]
        }
      })
    }

  return (
    <div className='container_btn_itemCount'>
      <Button onClick={sumar}>+</Button>
      <Button onClick={() => addToCart()} className='button-mid' >Agregar al carrito {counter}</Button>
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