import React, { useContext, useEffect } from 'react'
import { BsCart4 } from "react-icons/bs"
import '../assets/styles/style.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cart, setCart} = useContext(CartContext);

  const cantidad = () => {
    return cart.reduce((acu, item) => acu + item.stock, 0)
  }

  useEffect(() => {
    const keepCart = localStorage.getItem('cart')
    if (keepCart) {
      setCart(JSON.parse(keepCart))
    }
  }, [setCart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='icon-carrito'>
        
        <Link to={'/cart'}>
          <BsCart4 /> {cantidad()}
        </Link>
    </div>
  )
}

export default CartWidget