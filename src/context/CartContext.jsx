import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ( {children}) => {

    const [ cart, setCart ] = useState([])


     const addToCart = (producto) => {
        setCart([...cart, producto])
     }

     const removeFromCart = (productId) => {
        setCart(cart.filter((producto) => producto.id !== productId))
     }

     const clearCart = () => {
         setCart([])
    }

   
    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider