import React, { useEffect, useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { listAllusers } from "../actions/userAction";
import './UserListScreen.css'
import { deleteIndividualuser } from "../actions/userAction";
import { UPDATE_USER_DETAILS_RESET } from "../constants/userConstants";

const UserListScreen = () => {
  
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const usersList = useSelector((state) => state.usersList.users);
/*  const {success}=useSelector((state)=>state.userDelete)*/

  const { users } = usersList;  




  /*const {
    userLogin: { userInfo },
  } = useSelector((state) => state);

  const fetchAllUser = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/users`,
      config
    );
    setAllUsers(data)  

  },[]);
  console.log(allusers)*/


  useEffect(() => {   
    
    dispatch(listAllusers());
    
  }, []);

  const deleteHandler=(id)=>{
    dispatch(deleteIndividualuser(id))
    dispatch({type:UPDATE_USER_DETAILS_RESET})
  }

  const editHandler=(ids)=>{    
    navigate(`/user/${ids}/edit`)
  }

  return (
    <div style={{ padding: "150px" }}>
      <h1>Users</h1>
      <table className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { users && users.map((user) => (
              <tr key={user.id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
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

export default UserListScreen;
