import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Card, Stack, Heading, CardFooter, Divider, Box, Button, Image, Text } from '@chakra-ui/react';



const Cart = () => {

  const {cart, setCart} = useContext(CartContext)

  const clearCart = () => {
    setCart([])
  };

  const deleteOne = (itemId) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId)

    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart[itemIndex].stock--

      if (newCart[itemIndex].stock === 0) {
        newCart.splice(itemIndex, 1);
      }
      setCart(newCart)
    }
  };

  const increaseOne = (itemId) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId)

    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart[itemIndex].stock++

      if (newCart[itemIndex].stock === 0) {
        newCart.splice(itemIndex, 1)
      }
      setCart(newCart)
    }
  };

  const totalPrice = () => {
    if (!Array.isArray(cart)) {
      return 0
    } else {
      return cart.reduce((acu, item) => acu + item.precio * item.stock, 0);
  }}

  return (
    
    <div>
      <Heading className="titulo_cart" mb={1}>
        Carrito De Compras
      </Heading>
      <br />
      <br />
      {cart.map((item) => (
        <Box key={item.id} w="100%">
          <Divider mb={4} />
          <Card>
            <Box p={4} backgroundColor="#f1ecfd">
              <Image src={item.imagen} alt={item.titulo} className="imagen_cart" />
              <Stack spacing={4}>
              <Heading >
                  Titulo: {item.titulo}
                </Heading>
                <Heading size="md" className='precio_unitario'>
                  Precio unitario: ${item.precio}.-
                </Heading>
                <Heading  size="md" className= "cantidad">
                  Cantidad: {item.stock}
                </Heading>
              </Stack>
              <CardFooter justifyContent="center" marginTop="50px">
                <Button className= "btn-eliminar" onClick={() => deleteOne(item.id)}>
                  Eliminar
                </Button>
                <Text className="texto_modificar_compra" ml={4}>
                Modificar compra
                </Text>
                <Button className= "btn-agregar" onClick={() => increaseOne(item.id)} ml={4}>
                  Agregar
                </Button>
              </CardFooter>
            </Box>
          </Card>
          <Divider mt={4} />
        </Box>
      ))}
      <Heading  size="xl" mt={4}>
        Precio final: ${totalPrice()}.-
      </Heading>
      <Button mt={4} className="vaciar_carrito" onClick={clearCart}>
        Vaciar Carrito
      </Button>
      <Link to="/Form">
        <Button mt={4} className="confirmar_compra">
          Confirmar compra
        </Button>
      </Link>
    </div>
  );
};

export default Cart