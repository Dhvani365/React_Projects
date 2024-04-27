import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />

        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>

        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
