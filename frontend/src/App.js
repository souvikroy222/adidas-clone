import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import HomeScreen from "./screens/HomeScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import IndividualProduct from "./screens/IndividualProduct";
import CartScreen from "./screens/CartScreen";
import WishListScreen from "./screens/WishListScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import NotFound from "./screens/NotFound";
import { RequireAuth } from "./components/RequireAuth";
import { AuthProvider } from "./auth";
import OrderConfirmation from "./screens/OrderConfirmation";
import AllOrderScreen from "./screens/AllOrdersScreen";
import UserListScreen from "./screens/UserListScreen";
import EditUserScreen from "./screens/EditUserScreen";
import AllAdminProductsScreen from "./screens/AllAdminProductsScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import EditProductScreen from "./screens/EditProductScreen";
import AllAdminOrderScreen from "./screens/AllAdminOrderScreen";
import FilteredProducts from './screens/FilteredProducts'
import SearchProduct from "./screens/SearchProduct";

import { useSelector } from "react-redux";

function App() {

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfos, error } = userLogin;

  

 



  return (
    <AuthProvider>
      
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/wishlist" element={<WishListScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          

          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/products" element={<AllProductsScreen />} />
          <Route path="/products/:id" element={<IndividualProduct />} />
          <Route path="/products/categories/:name" element={<FilteredProducts />} />
          <Route path="/products/query=:search" element={<SearchProduct />} />

          
          
          
          <Route path="/shipping" element={<RequireAuth><ShippingScreen/></RequireAuth>} />
          <Route path="/orders" element={<RequireAuth><AllOrderScreen /></RequireAuth>} />
          <Route path="/orders/:id" element={<RequireAuth><OrderConfirmation/></RequireAuth>} />
          <Route path="/payment" element={<RequireAuth><PaymentScreen /></RequireAuth>} />
          <Route path="/allusers" element={<RequireAuth><UserListScreen /></RequireAuth>} />
          <Route path="/placeorder" element={<RequireAuth><PlaceOrderScreen /></RequireAuth>} />
          <Route path="/user/:id/edit" element={<RequireAuth><EditUserScreen /></RequireAuth>} />
          <Route path="/allproducts" element={<RequireAuth><AllAdminProductsScreen /></RequireAuth>} />
          <Route path="/products/create" element={<RequireAuth><CreateProductScreen /></RequireAuth>} />
          <Route path="/products/:id/edit" element={<RequireAuth><EditProductScreen /></RequireAuth>} />
          <Route path="/allorders" element={<RequireAuth><AllAdminOrderScreen /></RequireAuth>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;
