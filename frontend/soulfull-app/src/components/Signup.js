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

  const [formErrors, setFormErrors] = useState({
    password: '',
    email: '',
    signup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific error when user starts typing in a field
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    const errors = {};

    if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!username || !email || !password || !confirmPassword) {
      errors.signup = 'Please fill in all fields';
    }

    if (password !== confirmPassword) {
      errors.password = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setFormErrors({ ...formErrors, signup: error.response.data.message });
      } else {
        setFormErrors({ ...formErrors, signup: 'An error occurred. Please try again.' });
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        {formErrors.signup && <p className="error-message">{formErrors.signup}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
