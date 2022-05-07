import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteIndividualProduct } from "../actions/productAction";


const AllAdminProductsScreen = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const products = useSelector((state) => state.productList.products);
  


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const deleteHandler=(id)=>{
    dispatch(deleteIndividualProduct(id))
    window.location.reload(true)
  }

  const handleChange=()=>{
    navigate('/products/create')
  }

  const editHandler=(ids)=>{    
    navigate(`/products/${ids}/edit`)
  }


  return (
    <div style={{ padding: "150px" }}>
      <h1>All Products</h1>
      <button style={{marginBottom:50}} onClick={handleChange} className="register_btn">add new product</button>
      
      <table className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>BRAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { products.map((user) => (
              <tr key={user.id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                ${user.price}
                </td>
                <td>
                  {user.brand}
                </td>
                <td>
                   
                        <button className="admin_btns" onClick={()=>editHandler(user._id)}>
                            <i className="fas fa-edit"></i>
                        </button>
                    
                    <button className="admin_btns" onClick={()=>deleteHandler(user._id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAdminProductsScreen;
