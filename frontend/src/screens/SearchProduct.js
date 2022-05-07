import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RatingStar from "../components/RatingStar";
import { searchProducts } from "../actions/productAction";
import "./AllProductsScreen.css";
import { Link, useParams } from "react-router-dom";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const { search } = useParams();

  const products = useSelector((state) => state.searchProductDetails.product);

  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);

  const handleChange = (id) => {
    window.open(`http://localhost:3000/products/${id}`);
  };

  return (
    <div>
      <div className="products_grids">
        {products && products.length === 0 ? (
          <h3>No results found by {search} </h3>
        ) : (
          <>
            <h3>Search results for "{search}"</h3>
            {products &&
              products.map((items) => (
                <div className="product_carousels" key={items._id}>
                  <div className="product">
                    <div
                      className="product_image"
                      onClick={() => handleChange(items._id)}
                    >
                      <img src={items.image} />
                    </div>
                    <div
                      className="product_brand"
                      onClick={() => handleChange(items._id)}
                    >
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
          </>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
