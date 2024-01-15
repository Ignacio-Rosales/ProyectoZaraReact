import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {
    
    const [ cart, SetCart ] = useState([])

    const comision = "React en Coderhouse"


    return(
        <CartContext.Provider value={{comision, cart, SetCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default ShoppingCartProvider