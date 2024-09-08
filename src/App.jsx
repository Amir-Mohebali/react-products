import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
