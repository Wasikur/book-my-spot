import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhoneInputStyles.css";

const PhoneNumberPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/authentication");
  };

  return (
    <div className="phone-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ←
      </button>
      <div className="content">
        <p className="title-phone">Enter Phone number for verification</p>
        <p className="description">
          This number will be used for all ride-related communication. You shall
          receive an SMS with code for verification.
        </p>
      </div>
      <div className="input-container">
        <div className="flag-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="flag-icon"
          />
          <span className="country-code">+91</span>
        </div>
        <input
          type="text"
          placeholder="Enter phone number"
          maxLength={10}
          className="phone-input"
        />
        <button className="clear-button">×</button>
      </div>
      <button onClick={handleProceed} className="proceed-button">
        Proceed
      </button>
    </div>
  );
};

export default PhoneNumberPage;
