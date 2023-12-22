import React, { useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import '../assets/styles/style.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const [contador, setContador ] = useState(0)

  return (
    <div className='icon-carrito'>
        
        <Link to={'/cart'}>
          <BsCart4 /> {contador}
        </Link>
    </div>
  )
}

export default CartWidget