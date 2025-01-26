import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePageStyles.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/phone");
  };

  return (
    <div className="home-page-container">
      <div className="text">
        <h1>Parking Anytime,</h1>
        <h1>Anywhere without</h1>
        <h1>any hassle</h1>
      </div>

      <div className="buttonContainer">
        <button className="skipButton" onClick={handleNavigation}>
          Skip
        </button>
        <button className="nextButton" onClick={handleNavigation}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
