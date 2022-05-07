import React from 'react'
import './Popular.css'

const Popular = () => {
  return (
    <div className="popular_section">
      <div className="heading_popular">
        POPULAR RIGHT NOW
      </div>
      <div className="categories">
        <ul>
          <li>FACE COVERS</li>
          <li>WHITE SNEAKERS</li>         
          <li>SUPERSTAR</li>
          <li>ADIDAS ORIGINALS</li>
          <li>ULTRABOOST</li>
        </ul>
      </div>
      <div className="shopping_for_section">
        <div className="heading_who_are_you">WHO ARE YOU SHOPPING FOR</div>
        <div className="image_featured">
          <div className="men">
            <div className="men_item-text">MEN</div>
            <div className="men_image">
            <img src="/images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.png"></img>
            </div></div>
            <div className="men">
            <div className="men_item-text">WOMEN</div>
            <div className="men_image">
            <img src="/images/womens_1_tcm209-792193.png"></img>
            </div></div>
            <div className="men">
            <div className="men_item-text">KIDS</div>
            <div className="men_image">
            <img src="/images/kids_1_tcm209-792188.png"></img>
            </div></div>
        </div>
      </div>
    </div>
  )
}

export default Popular