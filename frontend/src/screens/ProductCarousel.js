import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import "./ProductCarousel.css";
import { Link } from 'react-router-dom'
import RatingStar from "../components/RatingStar";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductCarousel = () => {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);

  useEffect(() => {
    dispatch(getAllProducts());
    
  }, [dispatch]);

  const handleChange=(id)=>{
    window.open(`http://localhost:3000/products/${id}`);
  }

 

  return (
    <div>
      <Slider {...settings}>
        {products.map((items) => (
          <div className="product_carousels" key={items._id}>
            <div className="product"> 
            
              <div className="product_image" onClick={()=>handleChange(items._id)}>
                <img src={items.image} />
              </div>
              <div className="product_brand" onClick={()=>handleChange(items._id)}>
                <h2>{items.name.split(' ')[0]}</h2>
              </div>       
                             
              <div className="product_name">
                <h5>{items.name}</h5>
              </div>
              <div className="product_price">
                <h4>${items.price}</h4>
              </div>
              <div className="product_rating">
              <RatingStar values={items.rating}/>
             
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
