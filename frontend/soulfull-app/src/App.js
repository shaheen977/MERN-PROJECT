import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Yoga from './components/Yoga';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic (set isLoggedIn to true after successful login)
    setIsLoggedIn(true);
    // You can also set login credentials or token here
  };

  const handleLogout = () => {
    // Perform logout logic (set isLoggedIn to false)
    setIsLoggedIn(false);
    // Clear login credentials or token if needed
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn ? (
          <Route path="/yoga" element={<Yoga />} />
        ) : (
          <Route path="/yoga" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
