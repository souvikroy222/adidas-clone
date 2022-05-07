import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import { useAuth } from "../auth";

function NavBar() {
  const product = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();
  const auth=useAuth()

  //const userInfo = useSelector((state) => state.userLogin.userInfo);

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfos}=userLogin

  const logouthandle = () => {
    localStorage.removeItem("userInfo");
    window.location.reload(true);
    auth.logout()
  };

  return (
    <div className="header_section">
      <div className="featured_section">
        <div className="first_sec">
          <p>FREE DELIVERY FOR ALL ORDERS NOW</p>
        </div>
        <div className="second_sec">
          <p>SIGN UP & GET 15% OFF</p>
        </div>
        <div className="third_sec">
          <p>QUICK EASY RETURNS ON PREPAID ORDERS</p>
        </div>
      </div>

      <div className="header_section_two">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/Adidas_Logo.png" alt="adidas_main_logo" />
          </NavLink>
        </div>
        <div className="menus">
          <ul>
            <NavLink to="/products/categories/men">
              <li>MEN</li>
            </NavLink>
            <NavLink to="/products/categories/women">
              <li>WOMEN</li>
            </NavLink>
            
            <NavLink to="/products/categories/sports">
              <li>SPORTS</li>
            </NavLink>
            <NavLink to="/products">
              <li>ALL PRODUCTS</li>
            </NavLink>
            
          </ul>
        </div>
        



      <SearchBox/>


        <div className="user">
          {userInfos && userInfos.name ? (
            <p>Hi, {userInfos.name}</p>
          ) : (
            <Link to="/register">
              <img src="/images/person_black_24dp.svg" alt="user_icon" />
            </Link>
          )}

          {userInfos && userInfos.name ? (
            <div className="dropdown-content">
              <p onClick={logouthandle}>Log out!</p>
              {userInfos.isAdmin === false ? (
                <Link to="/orders">
                  <p>My Orders</p>
                </Link>
              ) : (
                <div>
                <Link to="/allusers">
                  <p>All Users</p>
                </Link>
                <Link to="/allproducts">
                  <p>All Products</p>
                </Link>
                <Link to="/allorders">
                  <p>All Orders</p>
                </Link></div>
                
                
                
                
              )}
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div className="wishlist">
          <Link to="/wishlist">
            <img
              src="/images/favorite_border_black_24dp.svg"
              alt="wishlist_icon"
            />
          </Link>
        </div>
        <div className="rounded">{product.length}</div>
        <div className="cart">
          <Link to="/cart">
            <img src="/images/shopping_bag_black_24dp.svg" alt="cart_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
