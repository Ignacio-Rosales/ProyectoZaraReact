import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, removeFromCart, clearCart} = useContext(CartContext)
  let total = 0

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

 const handleClear = () =>{
    clearCart()
 }


  return (
    <div>
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>El carrito esta vacio</p>
        ) : (
          <div>
          <ul className='container_ul'>
          {cart.map((item) => {
            total += item.price * item.quantity
            return (
            <li key={item.id} >
              <div className='container_img_cart'>
                <img src={item.src} alt={item.name} className='img_cart' style={{ width: '50px', marginRight: '10px' }} />
                {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity }
                <button onClick={() => handleRemove(item.id)}>Eliminar</button>
              </div>
            </li>
             )
        })}
        </ul>
        <p>Total: ${total.toFixed(2)} </p>
        </div>
        )}
        { cart.length > 0 ? <button onClick={handleClear}>Vaciar Carrito</button> : ""}
         <br />
         <Link to={'/'}>
         <button>Volver al inicio</button>
         </Link>
    </div>
  )
}

export default Cart