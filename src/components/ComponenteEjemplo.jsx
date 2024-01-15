import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ComponenteEjemplo = () => {

const {  cart, SetCart } = useContext(CartContext)


  return (
    <>
        {/* <h1>{cart}</h1>
        <p>{comision}</p> */}

        <button onClick={()=> SetCart("Nuevo valor")}>Boton</button>
    </>
  )
}

export default ComponenteEjemplo