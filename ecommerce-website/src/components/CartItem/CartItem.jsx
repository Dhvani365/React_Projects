import { useContext, useState } from 'react'
import { HomeContext } from '../../context/HomeContext'
import remove_icon from '../../assets/cart_cross_icon.png'
import './CartItem.css'

function CartItem() {
  const [count, setCount] = useState(0)
  const {allProducts, cartItems, removeFromCart, getTotalAmount} = useContext(HomeContext)
  return (
    <>
      <div className="cart-items">
        <div className="main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />        
        {allProducts.map((e)=>{
            if(cartItems[e.id]>0){
              return(
                <div key={e.id}>
                    <div className="items-format">
                        <img src={e.image} className='product-icon'/> 
                        <p>{e.name}</p>
                        <p>₹{e.new_price}</p>
                        <button className='quantity'>{cartItems[e.id]}</button>
                        <p>₹{e.new_price*cartItems[e.id]}</p>
                        <img className='removeIcon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                    <hr />            
                </div>
              );
            }
            return null;
        })}
        <div className="cartBottom">
          <div className="totalItems">
            <h1>Total Amount</h1>
            <div>
              <div className="cartTotal-amount">
                <p>Sub total</p>
                <p> ₹{getTotalAmount()} </p>
              </div>

              <hr />
              <div className="cartTotal-amount">
                <p>Shipping Charges</p>
                <p> ₹0 </p>
              </div>

              <hr />
              <div className="cartTotal-amount">
                <p>Total</p>
                <p> ₹{getTotalAmount()} </p>
              </div>

              <button>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem