import { useState } from 'react'
import exclusive_image from "../../assets/exclusive_image.png"
import './Offers.css'

function Offers(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On The Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Offers
