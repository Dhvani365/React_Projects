import { useState } from 'react'
import './navbar.css'
import cartImg from '../../assets/cart_icon.png'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { HomeContext } from '../../context/HomeContext'

function Navbar() {
  const [menu, setMenu] = useState("Home")
  const {getTotalItems} = useContext(HomeContext)
  return (
    <>
      {/* Making navbar of the website */}
      <div className="navbar">
        <div className="navLogo">
          <img src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design4.jpg" height="70px" width="70px" />
        </div>
       
        <ul className='navMenu'>
          <li onClick={() => { setMenu("Home") }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
            {menu === "Home" ? <hr /> : <></>}
          </li>

          <li onClick={() => { setMenu("men") }}>
            <Link to="/men" style={{ textDecoration: 'none', color: 'black' }}>
              Men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>

          <li onClick={() => { setMenu("women") }}>
            <Link to="/women" style={{ textDecoration: 'none', color: 'black' }}>
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>

          <li onClick={() => { setMenu("kids") }}>
            <Link to="/kids" style={{ textDecoration: 'none', color: 'black' }}>
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="navCart">       
          <Link to="/cart">   
          <img src={cartImg}/>
          </Link>
          <div className='cart-count'>{getTotalItems()}</div>
          <Link to="/login"> <button>Login</button> </Link>     
        </div>
      </div>
    </>
  )
}

export default Navbar
