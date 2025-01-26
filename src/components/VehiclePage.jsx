import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/Profile.png";
import "./VehiclePageStyles.css";
import Car from "../assets/car.svg";
import Bike from "../assets/bike.svg";
import { FaSignOutAlt } from "react-icons/fa";

const VehiclePage = () => {
  const navigate = useNavigate(); 

  // Show popup for under development message
  const showUnderDevelopmentPopup = () => {
    alert("Feature under development");
  };

  // Handle logout and navigate to home
  const handleLogout = () => {
    alert("Logged out");
    navigate("/"); 
  };

  return (
    <div className="vehicle-container">
      <div className="overlay"></div>

      {/* Header */}
      <div className="header">
        <img src={Profile} alt="User" className="user-image" />
        <div className="user-info">
          <p>Hello, Varun</p>
        </div>

        {/* Logout Button (Icon) */}
      </div>
       

      <FaSignOutAlt
          className="logout-icon"
          onClick={handleLogout}
          title="Logout"
        />

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Made Easily</h1>
        <h2 className="subtitle">Parking</h2>
      </div>

      {/* Selection Buttons */}
      <div className="button-container">
        <div className="button car" onClick={showUnderDevelopmentPopup}>
          <img src={Car} alt="Car" />
          <p>Car</p>
        </div>

        <div className="button bike" onClick={showUnderDevelopmentPopup}>
          <img src={Bike} alt="Bike" />
          <p>Bike</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button className="start-button" onClick={showUnderDevelopmentPopup}>
          Start Adding
        </button>
      </div>
    </div>
  );
};

export default VehiclePage;
