import React from "react";
import "./sidebar.css";

import cup from "../../assets/cup.png";
import dart from "../../assets/dart.png";
import home from "../../assets/home.png";
import thunder from "../../assets/thunder.png";

const Sidebar = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        {/* menu items */}
        <ul>
          <li>
            <span className="item-name">
              <img src={home} alt="Home" /> Home
            </span>
          </li>
          <li>
            <span className="item-name">
              <img src={cup} alt="Lounge Area" /> Lounge Area
            </span>
          </li>
          <li>
            <span className="item-name active">
              <img src={dart} alt="Track My Progress" /> Track My Progress
            </span>
          </li>
          <li>
            <span className="item-name">
              <img src={thunder} alt="My Ace Points" /> My Ace Points
            </span>
          </li>
        </ul>

        {/* Contact Us section */}

        <div className="contact-section">
          <button>Contact Us</button>
          <span>Copyright information act.</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
