import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Kids from "../Kids/Kids";
import "./Navbar.css";

const Navbar = ({ onLogout }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const [open, setOpen] = useState(false);

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
         <li className="nav-item" onMouseEnter={() => handleMouseEnter("kids")}>
          <Link to="/kids">Home</Link>
        </li>

         <li className="nav-item" onMouseEnter={() => handleMouseEnter("kids")}>
          <Link to="/kids">Beauty</Link>
        </li>
         <li className="nav-item" onMouseEnter={() => handleMouseEnter("kids")}>
          <Link to="/kids">Genz</Link>
        </li>
         <li className="nav-item" onMouseEnter={() => handleMouseEnter("kids")}>
          <Link to="/kids">Studio</Link>
        </li>
      </ul>

      <div className={`dropdown-wrapper ${activeDropdown ? "show" : ""}`}>
        {activeDropdown === "men" && <Men isOpened={open} />}
        {activeDropdown === "women" && <Women isOpened={open} />}
        {activeDropdown === "kids" && <Kids isOpened={open} />}
      </div>
    </nav>
  );
};

export default Navbar;
