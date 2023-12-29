import React from 'react';
import { useNavigate  } from 'react-router-dom';

const YogaHome = () => {

  const navigate  = useNavigate ();

  const handleLoginClick = () => {
    // Redirect to the Login component when the login button is clicked
    navigate ('/login'); // Replace '/login' with your actual login component route
  };

  const handleSignUpClick = () => {
    // Redirect to the SignUp component when the sign-up button is clicked
    navigate ('/signup'); // Replace '/signup' with your actual sign-up component route
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginRight: '10px',
    backgroundColor: '#008080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const yogaPoses = [
    { name: 'Downward-Facing Dog', image: 'https://via.placeholder.com/300' },
    { name: 'Warrior II', image: 'https://via.placeholder.com/300' },
    { name: 'Tree Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Child\'s Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Cobra Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Triangle Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Bridge Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Seated Forward Bend', image: 'https://via.placeholder.com/300' },
    { name: 'Plank Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Fish Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Camel Pose', image: 'https://via.placeholder.com/300' },
    { name: 'Corpse Pose', image: 'https://via.placeholder.com/300' },
    // Add more yoga poses here
  ];

  const benefitsOfYoga = [
    'Improves flexibility and balance',
    'Reduces stress and promotes relaxation',
    'Increases strength and stamina',
    'Enhances mental clarity and focus',
    'Boosts immune system functionality',
    'Improves posture and spinal health',
    'Helps in better sleep quality',
    'Aids in weight loss and metabolism',
    'Promotes inner peace and tranquility',
    'Supports overall well-being',
    'Balances emotions and reduces anxiety',
    'Enhances mindfulness and self-awareness',
    'Encourages a healthier lifestyle',
    // Add more benefits here
  ];

  const handleHover = (event) => {
    event.target.style.backgroundColor = '#005050';
  };

  const handleLeave = (event) => {
    event.target.style.backgroundColor = '#008080';
  };


  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f8ff', backgroundImage: 'url("background_image_url.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button
          onClick={handleLoginClick}
          style={{ ...buttonStyle }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Login
        </button>
        <button
          onClick={handleSignUpClick}
          style={{ ...buttonStyle }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Sign Up
        </button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#008080', paddingTop: '40px' }}>Welcome to the Yoga Home Page</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', paddingTop: '20px' }}>
          Embrace the serenity of yoga, where mind, body, and soul unite in harmony. Find your inner peace and balance through the practice of ancient wisdom.
        </p>
        <h2 style={{ color: '#008080', marginTop: '30px' }}>Benefits of Yoga:</h2>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: 'auto', paddingTop: '20px' }}>
          {benefitsOfYoga.map((benefit, index) => (
            <li key={index} style={{ fontSize: '16px', marginBottom: '10px' }}>
              {benefit}
            </li>
          ))}
        </ul>
        <h2 style={{ color: '#008080', marginTop: '30px' }}>Yoga Poses</h2>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', margin: '20px 0', paddingBottom: '40px', display: 'flex' }}>
          {yogaPoses.map((pose, index) => (
            <div key={index} style={{ marginRight: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
              <img
                src={pose.image}
                alt={pose.name}
                style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
              />
              <p style={{ fontSize: '14px', color: '#333', textAlign: 'center', marginTop: '10px' }}>
                {pose.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaHome;
