// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/auth.css';
import '../styles/welcome.css';

function Welcome() {
  const handleGoogleSignup = () => {
    console.log("🔐 Simulating Google signup...");
    alert("Google signup simulated! (Replace with real login)");
  };

  const handleFacebookSignup = () => {
    console.log("🔐 Simulating Facebook signup...");
    alert("Facebook signup simulated! (Replace with real login)");
  };

  return (
    <div className='welcome-page auth-container'>
    <div className="welcome-container">
      <div className="welcome-card auth-form">
        <h1>Welcome to EthioNest</h1>
        <br />  

        <div className="welcome-buttons">
          <Link to="/register" className="btn register-btn">Register</Link>
          <Link to="/login" className="btn login-btn">Login</Link>
        </div>

        <div className="divider"><span>OR</span></div>

        <div className="social-buttons">
          <button className="btn social-btn google" onClick={handleGoogleSignup}>
            Sign up with Google
          </button>
          <button className="btn social-btn facebook" onClick={handleFacebookSignup}>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;
