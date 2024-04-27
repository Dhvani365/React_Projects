import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import {HomeContext} from '../../context/HomeContext'
import star_icon from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(HomeContext);
  const count = Math.floor(Math.random()*1000);
  return (
    <>
      <div className="product-dis">
        <div className="product-left">
            <div className="img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
        </div>
        <div className="proddisplay-img">
            <img className="main-img" src={product.image}/>
        </div>
        <div className="product-right">
            <div className='heading'><h1>{product.name}</h1></div>
            <div className="rigth-star">
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull}/>
                <p>({count})</p>
            </div>
            <div className="product-right-prices">
              <p><b>Price:</b></p> 
              <div className="prices-old"> ₹{product.old_price}</div>
              <div className="prices-new"> ₹{product.new_price}</div>
            </div>
            <div className="display-right-size">
            <div className='heading'><h1>Select Size</h1></div>
              <div className="display-right-sizes">
                  <div>Small</div>
                  <div>Medium</div>
                  <div>Large</div>
                  <div>XL</div>
                  <div>XXL</div>
              </div>
              <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
              <p className='display-right-category'><span>Category: </span>{product.category} , {product.name}</p>
              <p className='display-right-category'><span>Tags: </span> Modern, Latest</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay