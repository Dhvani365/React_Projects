import { useState } from 'react'
import {Link} from "react-router-dom"
import './Item.css'

function Item(props) {

  return (
    <>
      <div className="item">
        <Link to={`/product/${props.id}`}><img width="250px" Style={"max-height: 300px"} src={props.image}/></Link>
        <p>{props.name}</p>
        <div className="items-prices">
            <div className="new-price">
                {props.new_price}₹
            </div>
            <div className="old-price">
                {props.old_price}₹
            </div>
        </div>
      </div>
    </>
  )
}

export default Item
