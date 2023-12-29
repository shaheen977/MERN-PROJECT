// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Password length validation (minimum 6 characters)
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
      return;
    } else {
      setPasswordError('');
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!username || !email || !password || !confirmPassword) {
      // You can handle validation errors here, like showing a message or preventing submission
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setSignupError(error.response.data.message);
      } else {
        setSignupError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        {emailError && <p className="error-message">{emailError}</p>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        {signupError && <p className="error-message">{signupError}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
