import { useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import CartContextProvider from './context/CartContext'
import Loader from './components/Loader'



function App() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(()=> {
    setTimeout(()=>{
      setProductos(["Producto A", "Producto B", "Producto C"])
      setLoading(false)
    },5000)
  }, [])

  if(loading){
    return <Loader />
  }

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
      
      {productos.map((p)=>{
        <li>{p}</li>
      })}
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App
