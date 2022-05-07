import "./ShippingScreen.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentMethod } from "../actions/cartAction";

import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }
  const [paymentMethod, setpaymentMethod] = useState("Cash On Delivery");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = () => {
   dispatch(PaymentMethod(paymentMethod));     
   navigate("/placeorder");    
  };

  return (
    <div className="shipping_section">
      <h1>Payment Method</h1>
      <form onSubmit={handleChange}>
          <div >
        <input
            onClick={(e) => setpaymentMethod('Stripe Gateway')}
          type="radio"
          name="paymentMethod"
          values="stripe"
          checked
          
        />
        <label>Paypal</label>      

        <input
        onClick={(e) => setpaymentMethod('cashOnDelivery')}
          type="radio"
          name="paymentMethod"
          values="cashondelivery"
                    
        />
        <label >Cash on Delivery</label></div>

        <div className="submit_btn">
          <button type="submit" className="register_btn">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
