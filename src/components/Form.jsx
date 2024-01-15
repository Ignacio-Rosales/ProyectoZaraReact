import React, { useState }from 'react'
import { Input, Button, Text} from '@chakra-ui/react'


const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    /*este purchaseId se va a buscar luego en el firebase*/
    const [purchaseId, setPurchaseId] = useState("vasdasd67")

    

    const handleSubmit=(e)=>{

        e.preventDefault()

        alert(`Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra`)

        setNombre("")
        setEmail("")
        
    }

    
  return (
    <div>
        <form action="" onSubmit={handleSubmit} method='post'>
            <Input placeholder='Nombre y apellido' required onChange={(e)=> setNombre(e.target.value)} value={nombre}/>
            <Input placeholder='Correo electronico' required type= "email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <Button colorScheme='blue'  type='submit'>Enviar informacion</Button>
        </form>

        <Text>
            {`El id de su compra es: ${purchaseId}`}
        </Text>
    </div>
  )
}

export default Form