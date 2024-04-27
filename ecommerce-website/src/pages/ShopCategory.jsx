import { useContext, useState } from 'react'
import Navbar from '../components/navbar/navbar'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import { HomeContext } from '../context/HomeContext'
import './ShopCategory.css'

function ShopCategory(props) {
  const {allProducts} = useContext(HomeContext)

  return (
    <>
      <Navbar/>
      <div className="shop-category">
        <img src={props.banner} alt="" />
        <div className="indexSort">
          <p>
            <span>Showing 1-12</span> out of 40 products
          </p>
          <div className="sort">
            Sort By <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="products-shop">
          {allProducts.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
      </div>
    </>
  )
}

export default ShopCategory