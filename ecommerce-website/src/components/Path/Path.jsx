import { useState } from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import './Path.css'

const Path = (props) => {
    const {product} = props;
    return(
        <div className="path">
            Home <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name} 
        </div>
    )
}
export default Path