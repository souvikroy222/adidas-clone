import "./LoginScreen.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/userAction";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogins = useSelector((state) => state.userLogin);

  const { userInfos, error, loading, success } = userLogins;

  useEffect(() => {
    if (success) {
      navigate("/");
      auth.login(userInfos.name);
    } else {
      navigate("/register");
    }
  }, [error, loading, success]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(email, password));
    console.log(email, password);
    //navigate("/");
    //window.location.reload(true);
  };

  return (
    <div className="login_section">
      <div className="login_area">
        <div className="login_text">
          <h1>Existing customer?</h1>
        </div>
        <form onSubmit={handleChange}>
          <div className="email_field">
            <h3>Enter your email</h3>
            <input
              required
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
            ></input>
          </div>

          <div className="password_field">
            <h3>Enter your password</h3>
            <input
              required
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            ></input>
          </div>
          <div className="submit_btn">
            <button className="register_btn" type="submit">
              Log in
            </button>
          </div>
        </form>

        <div className="new_user">
          <h3>New Customer?</h3>
          <NavLink to="/login">
            <span>Create new account</span>
          </NavLink>
          <div className="login_credentials">
            <div className="user_login_credentials">
              <h3 style={{ color: "red" }} className="credentials">
                CUSTOMER LOGIN
              </h3>
              <h3 style={{ color: "red" }} className="credentials">
                email - souvikroy@gmail.com
              </h3>
              <h3 style={{ color: "red" }} className="credentials">
                password - souvikroy
              </h3>{" "}
            </div>

            <div className="admin_login_credentials">
              <h3 style={{ color: "green" }} className="credentials">
                ADMIN LOGIN
              </h3>
              <h3 style={{ color: "green" }} className="credentials">
                email - testing@gmail.com
              </h3>
              <h3 style={{ color: "green" }} className="credentials">
                password - 123456
              </h3>{" "}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterScreen;
