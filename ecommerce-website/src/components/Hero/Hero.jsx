import { useState } from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_img from '../../assets/hero_image.png'

function Hero() {
  return (
    <>
      <div className="heroSection">
        {/* hero left section */}
        <div className="hero-left">

            <h2>New Arrivals</h2>
            <div>
                <div className="handIcon">
                    <p>New</p>
                    <img src={hand_icon} />
                </div>
                <p style={{paddingRight: '25px'}}> Collections </p>
                <p> For Everyone </p>
            </div>
            <div className="latest">
                <p>Latest Collections</p>
                <img src={arrow_icon} alt="" />
            </div>

        </div>

        {/* hero Right section */}
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
