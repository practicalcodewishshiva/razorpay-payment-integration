import React, { useState } from "react";
import { Link } from "react-router-dom";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Kids from "../Kids/Kids";
import "./Navbar.css";

const Navbar = ({ onLogout }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar" onMouseLeave={handleMouseLeave}>
      <ul className="nav-links">
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("men")}
        >
          <Link to="/men">Men</Link>
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("women")}
        >
          <Link to="/women">Women</Link>
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("kids")}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

    
      <div className={`dropdown-wrapper ${activeDropdown ? "show" : ""}`}>
        {activeDropdown === "men" && <Men />}
        {activeDropdown === "women" && <Women />}
        {activeDropdown === "kids" && <Kids />}
      </div>
    </nav>
  );
};

export default Navbar;
