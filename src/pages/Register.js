import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/auth.css'; // Assuming you have a separate CSS file for authentication styles

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    address: '',
    homeType: '',
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

  const validatePassword = (password) => {
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      lengthCheck &&
      uppercaseCheck &&
      lowercaseCheck &&
      numberCheck &&
      specialCharCheck
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.role) {
      setError('Please select a role.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.role === 'seller' && (!formData.address || !formData.homeType)) {
      setError('As a seller, you must provide your address and home type.');
      return;
    }

    setError('');
    console.log('✅ Registered Successfully:', formData);

    // TODO: Send to backend
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="form-error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="buyer"
              checked={formData.role === 'buyer'}
              onChange={handleChange}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="seller"
              checked={formData.role === 'seller'}
              onChange={handleChange}
            />
            Seller
          </label>
        </div>

        {/* Seller-specific fields */}
        {formData.role === 'seller' && (
          <>
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              value={formData.address}
              onChange={handleChange}
            />

            <select
              name="homeType"
              value={formData.homeType}
              onChange={handleChange}
              required
            >
              <option value="">Select Home Type</option>
              <option value="condominium">Condominium</option>
              <option value="apartment">Apartment</option>
              <option value="real-estate">Real Estate</option>
            </select>
          </>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-outline btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
