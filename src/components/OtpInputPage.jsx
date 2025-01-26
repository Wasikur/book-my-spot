import React, { useState } from 'react';
import './OtpStyles.css';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpInputPage = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const navigate = useNavigate();

  // Handles input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Automatically focus on the next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString === '1234') {
      alert('Logged in successfully!');
      navigate('/vehicles');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-wrapper">
      <button onClick={() => navigate(-1)} className="back-button">&larr;</button>
      <div className="otp-container">
        <h1 className="otp-title">Enter Verification Code</h1>
        <p className="otp-description">
          This number will be used for all ride-related communication. You shall
          receive an SMS with the code for verification.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <button type="submit" className="verify-button">
            Verify Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpInputPage;
