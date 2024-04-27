import { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Collections from '../components/Collections/Collections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collections />
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
