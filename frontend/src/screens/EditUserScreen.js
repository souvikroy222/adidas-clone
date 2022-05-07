import { useCallback, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listAllusers,
  editIndividualuser,
} from "../actions/userAction";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UPDATE_USER_DETAILS_RESET } from "../constants/userConstants";

const EditUserScreen = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState();

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetail);
  const { userdetails, success } = userDetails;

  const {
    userLogin: { userInfos },
  } = useSelector((state) => state);

  const userUpdate = useSelector((state) => state.userUpdate);


  const fetchUser = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/users/${id}`,
      config
    );
    setName(data.name);
    setEmail(data.email);
    setAdmin(data.isAdmin);    
  },[id]);

  useEffect(() => {
    fetchUser()    
  }, [id])
  

  const handleChange = () => {
    dispatch(editIndividualuser(id, username, email, admin));    
  };

  return (
    <div className="shipping_section">
      <h1>change user details</h1>
      <form onSubmit={handleChange}>
        <div className="address_field">
          <h3>Name</h3>
          <input
            value={username}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          ></input>
        </div>
        <div className="address_field">
          <h3>Email</h3>
          <input
            value={email}
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          ></input>
        </div>

        <div className="address_field">
          <h3>Admin Privilege Access</h3>
          <input
            
            type="radio"
            name="admin"
            value={true}
            
            onChange={(e)=>setAdmin(e.target.value)}
            
          />
          <label>Yes</label>

          <input
            
            type="radio"
            name="admin"
            value={false}
               
            onChange={(e)=>setAdmin(e.target.value)}
            
          />
          <label>No</label>
        </div>
        <div className="submit_btn">
          <button className="register_btn">Save Details</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserScreen;
