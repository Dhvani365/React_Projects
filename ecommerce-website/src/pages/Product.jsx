import React, { useContext } from 'react'
import Navbar from '../components/navbar/navbar'
import Path from '../components/Path/Path'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Footer from '../components/Footer/Footer'
import {HomeContext} from '../context/HomeContext'
import {useParams} from 'react-router-dom';

function Product() {
  const {allProducts} = useContext(HomeContext);
  const {productId} = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  return (
    <>
      <Navbar/>
      <Path product={product}/>
      <ProductDisplay product={product}/>
      <Footer/>
    </>
  )
}

export default Product