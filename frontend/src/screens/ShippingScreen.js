import "./ShippingScreen.css";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartAction";

import { useNavigate } from "react-router-dom";

const ShippingScreen = () => {

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart


  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setpostalCode] = useState(shippingAddress.postalCode);
  const [country, setcountry] = useState(shippingAddress.country);  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {

    dispatch(saveShippingAddress({address,city,postalCode,country}));     
   navigate("/payment");    
  };

  return (
    <div className="shipping_section">
      <h1>Shipping</h1>
      <form onSubmit={handleChange}>
        <div className="address_field">
          <h3>Address</h3>
          <input
            value={address}
            type="text" required
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          ></input>          
        </div>
        <div className="address_field">
          <h3>City</h3>
          <input
            value={city}
            type="text" required
            onChange={(e) => setCity(e.target.value)}
            placeholder="city"
          ></input>          
        </div>
        <div className="address_field">
          <h3>Postal Code</h3>
          <input
            value={postalCode}
            type="text" required
            onChange={(e) => setpostalCode(e.target.value)}
            placeholder="Postal Code"
          ></input>          
        </div>
        <div className="address_field">
          <h3>Country</h3>
          <input
            value={country}
            type="text" required
            onChange={(e) => setcountry(e.target.value)}
            placeholder="Postal Code"
          ></input>          
        </div>
        <div className="submit_btn">
          <button className="register_btn" >
            Continue
          </button>
        </div>
        </form>

    
    </div>
  );
};

export default ShippingScreen;

