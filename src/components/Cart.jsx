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
          <ul>
          {cart.map((item) => {
            total += item.price * item.quantity
            return (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity }
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </li>
             )
        })}
        </ul>
        <p>Total: ${total.toFixed(2)} </p>
        </div>
        )}
         <button onClick={handleClear}>Vaciar Carrito</button>
         <br />
         <Link to={'/'}>
         <button>Volver al inicio</button>
         </Link>
    </div>
  )
}

export default Cart