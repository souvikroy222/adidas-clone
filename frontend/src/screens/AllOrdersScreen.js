import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { fetchAllOrders } from "../actions/orderAction";
import "./AllOrdersScreen.css";

const AllOrdersScreen = () => {
  
 
  const dispatch = useDispatch();
  const navigate=useNavigate()

  //const products = useSelector((state) => state.userOrders.allorders);
  const products = useSelector((state) => state.userOrders);
  const {allorders}=products

  const handleChange=(id)=>{
    navigate(`/orders/${id}`)
    

  }

  useEffect(() => {
   
    dispatch(fetchAllOrders());   
   
  }, [dispatch]);

  return (    
    <div className="order_main" >
      <h1>Your Orders</h1>   

      {allorders &&
        allorders.map((items, index) => (
          <div key={index} className="order_submain">
            <div className="products_main">
              
            <h1 style={{color:'green'}}>Products</h1>
              {items.orderItems.map((products) => (
                <div>
                  <div className="order_img">
                    
                    <img src={products.image}></img>
                  </div>
                  <p>{products.name}</p>
                </div>
              ))}
            </div>
            <div className="order_details">
              <div className="order_delivery">
                <p style={{ color: "red" }}>Delivery Location</p>
                <h3>
                  {items.shippingAddress.address}, {items.shippingAddress.city},{" "}
                  {items.shippingAddress.postalCode},{" "}
                  {items.shippingAddress.country}
                </h3>
                <hr></hr>
                <p style={{ color: "red" }}>Payment Mode</p>
                {items.isPaid===true?<h3 style={{color:'green'}}>Paid by Paypal</h3>:<h3>Cash on Delivery</h3>}
                <hr></hr>
                <button className='register_btn' onClick={()=>handleChange(items._id)}>Order Details</button>
              </div>
              <div className="order_pricing">
                <p style={{ color: "red" }}>Pricing Details</p>
                <h3>Tax Price - ${items.taxPrice}</h3>
                <hr></hr>
                <h3 style={{ color: "red" }}>
                  Total Price - ${items.totalPrice}
                </h3>
                <hr></hr>
                <h3 style={{ color: "red" }}>
                  Order Date -
                </h3>
                <p>{(new Date(`${items.createdAt}`).toDateString())}</p>
              <p>{(new Date(`${items.createdAt}`).toTimeString())}</p>
                <hr></hr>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllOrdersScreen;
