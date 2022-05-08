import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RatingStar from "../components/RatingStar";
import { getAllProducts } from "../actions/productAction";
import "./AllProductsScreen.css";
import { Link } from "react-router-dom";

const AllProductsScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div className="products_grids">
      {products.map((items) => (
        <div className="product_carousels" key={items._id}>
          <div className="product">
            <Link to={`/${items._id}`}>              
              <div className="product_image">
                <img src={items.image} />
              </div>
              <div className="product_brand">
                <h3>{items.name.split(" ")[0]}</h3>
              </div>
            </Link>
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
    </div>
  );
};

export default AllProductsScreen;
