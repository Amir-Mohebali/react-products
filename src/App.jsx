import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import { data } from './utilities/products'

import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    setProducts(data);
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home items={products}/>}/>
        <Route path='/products/:cat' element={<ProductList items={products}/>} />
        <Route path='/products/tv/:productId' element={<ProductDetails items={products} category="tv"/>} />
        <Route path='/products/phone/:productId' element={<ProductDetails items={products} category="phone"/>} />
        <Route path='/products/laptop/:productId' element={<ProductDetails items={products} category="laptop"/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
