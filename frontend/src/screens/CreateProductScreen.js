import React, { useState, useCallback } from "react";
import { useReducer } from "react";
import { createIndividualProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const usedispatch = useDispatch();

  const imgUploadHandle = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
  const handleChange = (e) => {
    e.preventDefault();

    const infos = {
      name,
      image,
      brand,
      category,
      description,
      rating,
     
      price,
      countInStock,
    };
    console.log(infos);

    usedispatch(createIndividualProduct(infos));
    
    
  };

  return (
    <div className="shipping_section">
      <h1>Add New Product</h1>
      <form className="create_product" onSubmit={handleChange}>
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
          <h3>Product Category</h3>
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
            name="description"
            value={description}
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Product description"
          ></input>
        </div>
        <div className="address_field">
          <h3>Product rating</h3>
          <input
            name="rating"
            value={rating}
            type="text"
            required
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter Product rating"
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
            onChange={(e) => setCountInStock(e.target.value)}
            placeholder="Enter Product count In Stock"
          ></input>
        </div>

        <div className="submit_btn">
          <button className="register_btn">Create New Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductScreen;
