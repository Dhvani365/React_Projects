import { useState } from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import pinterest_icon from '../../assets/pintester_icon.png'
import './Footer.css'

function Footer(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="footer">
        <div className="footer-logo">
            <img src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design4.jpg" alt="" />
        </div>
        <ul className="links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="icons">
            <div className="icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>All rights are reserved.. Copyright @ 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer
