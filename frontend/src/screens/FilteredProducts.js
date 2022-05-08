import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RatingStar from "../components/RatingStar";
import { filterOrders } from "../actions/productAction";
import "./AllProductsScreen.css";
import { Link,useParams } from "react-router-dom";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  const {name}=useParams()

  const products = useSelector((state) => state.filteredProductDetails.product);
const {success}=useSelector((state) => state.filteredProductDetails)

  useEffect(() => {
    
    dispatch(filterOrders(name));
  }, [name]);
  console.log(products);

  const handleChange=(id)=>{
    window.open(`/products/${id}`);
  }

  return (
<div>
   
    <div className="products_grids">
    
        
      {products.map((items) => (
        <div className="product_carousels" key={items._id}>
          <div className="product">
                          
              <div className="product_image" onClick={()=>handleChange(items._id)}>
                <img src={items.image} />
              </div>
              <div className="product_brand" onClick={()=>handleChange(items._id)}>
                <h3>{items.name.split(" ")[0]}</h3>
              </div>
            
            <div className="product_name">
              <h5>{items.name}</h5>
            </div>
            <div className="product_price">
              <h4>${items.price}</h4>
            </div>
            <div className="product_rating">
              <RatingStar values={items.rating} />
            </div>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default FilteredProducts;
