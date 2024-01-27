import React from 'react'
import { Card, CardHeader,CardFooter, SimpleGrid, Heading, Text, Button , Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ( { id, titulo, categoria, imagen } ) => {

  return (
    <div key={id}>
    <SimpleGrid
      spacing={4}
      templateRows="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> {titulo} </Heading>
          <Image
            boxSize='150px'
            objectFit='cover'
            src= {imagen}
            alt= 'Imagen del producto'
            className='imagen_item'
          />
          <Text>Categoria: {categoria}</Text>
        </CardHeader>

        <Link to={`/item/${id}`}>
        <CardFooter>
              <Button className='ver-detalle'>Ver detalle</Button>
        </CardFooter>
          </Link>
      </Card>

    </SimpleGrid>
    </div>
  );
}

export default Item