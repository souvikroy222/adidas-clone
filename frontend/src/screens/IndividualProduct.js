import "./IndividualProduct.css";
import React from "react";
import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../actions/productAction";
import ProductCarousel from "./ProductCarousel";
import { addToCart } from "../actions/cartAction";
import { addToWishList } from "../actions/wishListAction";




const IndividualProduct = () => {
  const [quantity,setQuantity]=useState(1)
  
const navigate=useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productDetails.product);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);

  
  const wishlistHandle=()=>{
    dispatch(addToWishList(id))
    navigate('/wishlist')
  }


  const buyNowHandle=()=>{
    dispatch(addToCart(id,parseInt(quantity)))
    navigate('/cart')
    console.log(quantity)
  }

 
  return (
    <div className="product_details">
      <div className="product_img_area">
        <div className="product_image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product_desc_are">
          <div className="product_brandname">
            <h1>{product.brand}</h1>
          </div>
          <div className="product_names">
            <h2>{product.name}</h2>
          </div>
          <hr></hr>
          <div className="product_descrip">
            <h3>{product.description}</h3>
          </div>
          <hr></hr>
          <div className="product_rate">
            <h1>${product.price}</h1>
          </div>
          <hr></hr>
          <div className="product_itemsinstock">
            <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option  key={x + 1} value={x+1} >
                  {x + 1}
                </option>
              ))}
            </select>
          </div>         

          <div className="submit_btn">
          <button onClick={wishlistHandle} className="register_btn" >
           Add to Wishlist
          </button>
        </div>




          <div className="submit_btn">
          <button onClick={buyNowHandle} className="register_btn" >
            Buy Now 
          </button>
        </div>
        </div>
      </div>
                
      <ProductCarousel/>

    </div>
    
  );
};

export default IndividualProduct;
