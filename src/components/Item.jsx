import React from 'react'
import { Card, CardHeader,CardFooter, SimpleGrid, Heading, Text, Button , Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {

  return (
    <SimpleGrid
      spacing={4}
      templateRows="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> {producto.titulo} </Heading>
          <Image
            boxSize='150px'
            objectFit='cover'
            src= {producto.imagen}
            alt= 'Imagen del producto'
            className='imagen_item'
          />
          <Text>Categoria: {producto.categoria}</Text>
        </CardHeader>

        <Link to={`/item/${producto.id}`}>
        <CardFooter>
          
              <Button className='ver-detalle'>Ver detalle</Button>
        </CardFooter>
          </Link>
      </Card>

    </SimpleGrid>
  );
}

export default Item