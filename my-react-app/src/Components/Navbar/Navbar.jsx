import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Kids from "../Kids/Kids";
import "./Navbar.css";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const [open, setOpen] = useState(false);


   const {totalQuantity} = useSelector(state => state.allCart);
  

  // const { totalQuantity} = useSelector(state => state.allCart)

  const dispatch = useDispatch()


  

  
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
    setOpen((prevValue) => !prevValue);
    console.log("activeDropdown", activeDropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown((prevValue) => {
      return !prevValue;
    });
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/men");
    handleMouseLeave();
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Handle search functionality here
      console.log("Searching for:", searchQuery);
      // You can navigate to search results page or filter products
    }
  };

  return (
    <nav className="navbar" onMouseLeave={handleMouseLeave}>
      <ul className="nav-links">
        <li className="nav-item" onMouseEnter={() => handleMouseEnter("men")}>
          {/* <Link to="/men">Men</Link> */}

          <div onClick={handleNavigate}>Men</div>
        </li>

        <li className="nav-item" onMouseEnter={() => handleMouseEnter("women")}>
          <Link to="/women">Women</Link>
        </li>

        <li className="nav-item" onMouseEnter={() => handleMouseEnter("kids")}>
          <Link to="/kids">Kids</Link>
        </li>
         <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>

         <li className="nav-item">
          <Link to="/beauty">Beauty</Link>
        </li>
         <li className="nav-item">
          <Link to="/genz">Genz</Link>
        </li>
         <li className="nav-item">
          <Link to="/studio">Studio</Link>
        </li>
      </ul>

       <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="user-actions">
          <div className="action-item">
            <Link to="/profile">Profile</Link>
          </div>
          <div className="action-item">
            <Link to="/wishlist">Wishlist</Link>
          </div>
          <div className="action-item">
            <Link to="/checkOutPage">Bag ({totalQuantity}) </Link>
          </div>
        </div>

      <div className={`dropdown-wrapper ${activeDropdown ? "show" : ""}`}>
        {activeDropdown === "men" && <Men isOpened={open} />}
        {activeDropdown === "women" && <Women isOpened={open} />}
        {activeDropdown === "kids" && <Kids isOpened={open} />}
      </div>
      
    </nav>
  );
};

export default Navbar;
