import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!formData.password) {
      setError('Please enter your password.');
      return;
    }

    setError('');
    console.log('✅ Logging in with:', formData);
    // TODO: Send login request to backend here
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="form-error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email or Username"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div style={{ textAlign: 'right', marginBottom: '15px' }}>
          <Link to="/Forgetpassword" className="link-button">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn-outline btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
