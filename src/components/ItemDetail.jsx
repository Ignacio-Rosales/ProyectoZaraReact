import React, { useEffect, useState } from 'react'
import { Container,Card, CardHeader, CardBody, Heading, Text ,CardFooter, Image} from '@chakra-ui/react'
import '../assets/styles/style.css'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemCount from './ItemCount'

const ItemDetail = ( {items} ) => {

  const { id } = useParams();
  const [item, setItem] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = doc(db, "items", `${id}`);

    getDoc(itemsRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem(snapshot.data());
      } else {
        console.log("Error: No se encuentra el producto");
      }
    });
  }, [id]);

  
  const itemFilter = items && items.filter((item) => item.id == id);

  return (
    <Container maxW='xl' mt='8' className='card'> 
      { itemFilter.map((item)=> (
    
      <div key={item.id}>
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
          <ItemCount 
           id={item.id}
           nombre={item.titulo}
           precio={item.precio}
           stock={item.stock}
           item={item}
           imagen={item.imagen} />  
        </CardFooter>
      </Card>
      </div>
     ))}
    </Container>
  );
}

export default ItemDetail