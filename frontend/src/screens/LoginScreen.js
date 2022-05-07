import "./LoginScreen.css";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { registerUserAction, loginUserAction } from "../actions/userAction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();





  const handleChange = (e) => {
    e.preventDefault()
    dispatch(registerUserAction(name, email, password));
    console.log(name, email, password);
    navigate("/register");
    toast("Registered Successfully");
  };





  return (
    <div className="login_section">
      <div className="login_area">
        <div className="login_text">
          <h1>Create new account?</h1>
        </div>
        <form onSubmit={handleChange}>
          <div className="name_email_field">
            <div className="name_field">
              <h3>Enter your name</h3>
              <input
                value={name}
                required
                onChange={(e) => setname(e.target.value)}
                type="text"
                placeholder="name"
              ></input>
            </div>

            <div className="email_field">
              <h3>Enter your email</h3>
              <input
                value={email}
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              ></input>
            </div>
          </div>
          <div className="password_field">
            <h3>Enter your password</h3>
            <input
              value={password}
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            ></input>
          </div>
          <div className="submit_btn">
            <button className="register_btn">REGISTER</button>
          </div>
        </form>
        
       
        <div className="new_user">
          <h3>Existing Customer?</h3>
          <NavLink to="/register">
            <span>sign in</span>
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginScreen;
