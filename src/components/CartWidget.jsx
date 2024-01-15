import React, { useContext, useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import '../assets/styles/style.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const {cart } = useContext(CartContext)

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className='icon-carrito'>
        
        <Link to={'/cart'}>
          <BsCart4 /> {totalQuantity}
        </Link>
    </div>
  )
}

export default CartWidget