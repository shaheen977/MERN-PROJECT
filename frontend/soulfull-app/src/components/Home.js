import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const YogaHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const yogaPoses = [
    { name: 'Downward-Facing Dog', image: '/downward-facing-dog.jpg' },
    { name: 'Warrior II', image: '/warrier.jpg' },
    { name: 'Tree Pose', image: '/tree-pose.jpg' },
    { name: 'Child\'s Pose', image: '/childs-pose.jpg' },
    { name: 'Cobra Pose', image: '/cobra-pose.jpg' }, // Adjusted path assuming it's in the "public" folder
    { name: 'Triangle Pose', image: '/triangle-pose.jpg' },
    { name: 'Bridge Pose', image: 'bridge-pose.jpeg' },
    { name: 'Seated Forward Bend', image: 'seated-forward-bend.jpg' },
    { name: 'Plank Pose', image: '/plank-pose.jpeg' },
    { name: 'Fish Pose', image: '/fish-pose.jpg' },
    { name: 'Camel Pose', image: 'camel-pose.jpeg' },
    { name: 'Corpse Pose', image: 'corpose-pose.jpeg' },
    // Add more yoga poses here
  ];

  const handleHover = (event) => {
    event.target.style.backgroundColor = '#005050';
  };

  const handleLeave = (event) => {
    event.target.style.backgroundColor = '#008080';
  };

  return (
    <div className="home-container">
      <div className="button-container">
        <button
          onClick={handleLoginClick}
          className="home-button"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Login
        </button>
        <button
          onClick={handleSignUpClick}
          className="home-button"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Sign Up
        </button>
      </div>
      <div className="content-container">
        <h1 className="main-heading">PranaSculpt: Aligning Health with Yoga</h1>
        <p className="main-text">
          Embrace the serenity of yoga, where mind, body, and soul unite in harmony. Find your inner peace and balance through the practice of ancient wisdom.
        </p>
    
        <h2 className="secondary-heading">Yoga Poses</h2>
        <div className="poses-container">
          {yogaPoses.map((pose, index) => (
            <div key={index} className="pose-card">
              <img
                src={pose.image}
                alt={pose.name}
                className="pose-image" // Add a class for styling
                style={{ width: '300px', height: '300px' }} // Set fixed width and height
              />
              <p className="pose-name">{pose.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaHome;
