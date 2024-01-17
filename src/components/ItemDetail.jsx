import React, { useContext } from 'react'
import { Card, CardHeader, CardBody, SimpleGrid, Heading, Text ,CardFooter, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import '../assets/styles/style.css'


const ItemDetail = ( {item} ) => {

  const {addToCart} = useContext(CartContext)

  const handleBuyClick = (quantity) => {
    //Aca creo un objeto con la info del producto y la cantidad
    const productToAdd = {
      id: item.id,
      name: item.titulo,
      price: item.precio,
      quantity: quantity
    }

    addToCart(productToAdd)
  }



  return (
    <div className='card'>
    <SimpleGrid
      spacing={4}
      templateRows="repeat(auto-fill, minmax(300px, 1fr))"
    >
      
      <Card>
        <CardHeader>
          <Heading size="md"> {item.titulo} </Heading>
          <Image
            boxSize='150px'
            objectFit='cover'
            src= {item.imagen}
            alt= "Imagen del producto"
            className='imagen_detail'
          />
          <Text>{item.categoria}</Text>
        </CardHeader>
        <CardBody>
          <Text>{item.descripcion}</Text>
          <Text>Precio: ${item.precio}</Text>
          <Text>Stock: {item.stock}</Text>
        </CardBody>
        <CardFooter>
          <ItemCount onBuyClick={handleBuyClick} />  
        </CardFooter>
      </Card>
      
    </SimpleGrid>
    </div>
  );
}

export default ItemDetail