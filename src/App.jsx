import { useState, useEffect} from 'react'
import CartContextProvider from './context/CartContext'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Form from './components/Form'
import Loader from './components/Loader'



function App() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(()=> {
    setTimeout(()=>{
      setProductos([])
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
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      
      {productos.map((p)=>{
        <li>{p}</li>
      })}
    </CartContextProvider>
      </BrowserRouter>
  );
}

export default App
