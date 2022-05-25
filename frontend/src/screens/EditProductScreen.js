import React, { useState } from "react";
import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateIndividualProduct } from "../actions/productAction";

const EditProductScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  

  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    userLogin: { userInfos },
  } = useSelector((state) => state);

  const fetchProduct = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.get(
      `/api/products/${id}`,
      config
    );
    setName(data.name);
    setImage(data.image)
    setBrand(data.brand);
    setCategory(data.category);
    setDescription(data.description);
    setRating(data.rating);    
    setPrice(data.price);
    setCountInStock(data.countInStock);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);
  
  const imgUploadHandle = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers:{
          "Content-Type": "multipart/form-data",
        }
        
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        config
      );
      console.log(data);
      setImage(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const inputhandleChange = () => {
    const data = {
      name,
      brand,
      image,
      category,
      description,
      rating,
            price,
      countInStock,
    };
    dispatch(updateIndividualProduct(data, id));
  };

  return (
    <div className="shipping_section">
      <h1>Edit Product</h1>
      <form className="create_product" onSubmit={(e) => inputhandleChange(e)}>
        <div className="address_field">
          <h3>Product Name</h3>
          <input
            name="name"
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Product Name"
          ></input>
        </div>
        <div className="address_field">
          <h3>Product Brand</h3>
          <input
            name="brand"
            value={brand}
            type="text"
            required
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter Product Brand"
          ></input>
        </div>
        <div className="address_field">
          <h3>Product Brand</h3>
          <input
            name="category"
            value={category}
            type="text"
            required
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Product category"
          ></input>
           <input
            onChange={imgUploadHandle}
            type="file"
            name="input-file"
            label="Choose File"
            id="image-file"
          />
        </div>
        <div className="address_field">
          <h3>Product description</h3>
          <input
            name="category"
            value={description}
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Product category"
          ></input>
        </div>
        <div className="address_field">
          <h3>Product rating</h3>
          <input
            name="description"
            value={rating}
            type="text"
            required
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter Product description"
          ></input>
        </div>       
        <div className="address_field">
          <h3>Product Price</h3>
          <input
            name="price"
            value={price}
            type="text"
            required
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Product price"
          ></input>
        </div>
        <div className="address_field">
          <h3>Product Count in Stock</h3>
          <input
            name="countInStock"
            value={countInStock}
            type="text"
            required
            onChange={(e) => setCountInStock(e)}
            placeholder="Enter Product count In Stock"
          ></input>
        </div>

        <div className="submit_btn">
          <button className="register_btn">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProductScreen;
