import React from 'react'
import { Card, CardHeader, CardBody, SimpleGrid, Heading, Text ,CardFooter, Button, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount';



const ItemDetail = ( {item} ) => {
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
          <Button>
            <ItemCount />
          </Button>
        </CardFooter>
      </Card>
      
    </SimpleGrid>
    </div>
  );
}

export default ItemDetail