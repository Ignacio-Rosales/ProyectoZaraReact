import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { cart, removeFromCart, clearCart} = useContext(CartContext)
  

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
          <ul>
          {cart.map((item) => (
            <li key={item.id}>
              console.log(item.id)
              {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity }
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        )}
         <button onClick={handleClear}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart