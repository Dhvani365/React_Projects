import { useState } from 'react'
import CartItem from '../components/CartItem/CartItem'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/Footer'

function Cart() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CartItem/>
      <Footer/>
    </>
  )
}

export default Cart