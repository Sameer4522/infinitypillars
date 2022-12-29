import React from "react";
import "./navbar.css";

import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h2 className="logo">Accelerate.</h2>
      </div>

      <form className="search-bar">
        <input type="text" placeholder="Search" name="search" />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="user-section">
        <h4>Williams Smooth</h4>
        <img src={user} alt="user-img" />
      </div>
    </nav>
  );
};

export default Navbar;
