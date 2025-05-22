// Forgetpassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/auth.css';

const Forgetpassword = () => {
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (!validateEmail(resetEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setResetSuccess(true);
    console.log('🔁 Simulating password reset email to:', resetEmail);

    // TODO: Send password reset request to backend here
  };

  return (
    <div className="auth-container">
      <div className="auth-card reset-section auth-form">
        <h1>Forgot Password?</h1>
        <p>Please enter the email address you used when you joined and we’ll 
            send you instructions to reset your password.</p>

        <form onSubmit={handlePasswordReset}>
            
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Send Reset Link</button>
        </form>

        {error && <p className="error">{error}</p>}
        {resetSuccess && <p className="success">Password reset link sent!</p>}

        <p>
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Forgetpassword;
