import React, { useState } from "react";
import "./SearchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()    
      navigate(`/products/query=${searchValue}`); 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input required
            tvalue={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
