import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import CartContextProvider from './context/CartContext'



function App() {
  

  return (
    <BrowserRouter>
      <CartContextProvider>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App
