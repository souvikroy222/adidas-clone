import React from 'react'
import './HomeScreen.css'

import NavBar from "../components/NavBar";
import Offer from "../components/Offer";
import About from "../components/About";
import Popular from "../components/Popular";
import Whatshot from "../components/Whatshot";
import Footer from "../components/Footer";
import Banners from "../components/Banners";
import ProductCarousel from "../screens/ProductCarousel";


const HomeScreen = () => {
  return (
    <div>
        
    <Banners />
    <div className="popular">
      <Popular />
    </div>
    <div className="products">
      <ProductCarousel />
    </div>
    <Whatshot />
    <About />
    <Offer />
    <Footer /></div>
  )
}

export default HomeScreen