import { useState } from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'
import './Collections.css'

function Collections() {
  return (
    <>
      <div className="new-coll">
        <h1> New Collections For You </h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </>
  )
}

export default Collections
