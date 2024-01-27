import React, { useContext, useState }from 'react'
import { Input, Button, Text, FormControl, FormLabel} from '@chakra-ui/react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import { CartContext } from '../context/CartContext'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    /*este purchaseId se va a buscar luego en el firebase*/
    const [purchaseId, setPurchaseId] = useState("")
    const [telefono , setTelefono] = useState("")
    const {cart, setCart} = useContext(CartContext)
    
    const db = getFirestore()
    const ordersCollection = collection(db, "orden")

    const manejarEnvio = async (e)=>{

        e.preventDefault()

        if(!nombre || !email || !telefono || cart.length === 0){
            alert("Los campos no deben estar vacios para completar su pedido")
        }
    

        const order = {
            cliente :  { nombre, email, telefono},
            items: cart,
            date: Date(),
        }
        
        try {
            const docRef = await addDoc(ordersCollection, order)
            setPurchaseId(docRef.id)
            setCart([])
        } catch (error) {
            alert("Error al confirmar el pedido")
        }
}
    
        return (
            <div>
                <form onSubmit={manejarEnvio} >
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)} value={nombre} />
                </FormControl>

                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} value={email} />
                </FormControl>

                <FormControl>
                    <FormLabel>Telefono</FormLabel>
                    <Input type='tel' placeholder='Telefono' onChange={(e)=> setTelefono(e.target.value)} value={telefono} />
                </FormControl>
                
                
                {purchaseId && (
                <Text>
                    {`La orden de su compra es: ${purchaseId}. Gracias por realizar su compra`}
                </Text>
                )}

                <Button type= 'submit' colorScheme='linkedin'>Enviar</Button>
                </form>
            </div>
  )
}

export default Form