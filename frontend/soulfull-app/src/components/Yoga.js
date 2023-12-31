import React, { useState } from 'react';
import './yoga.css';



const Yoga = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [yogaInformation, setYogaInformation] = useState(null);

  const healthIssues = [
    'Stress',
    'Back Pain',
    'Anxiety',
    'Insomnia',
    'Digestive Problems',
    // Add more health issues if needed
  ];

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedIssue(selected);
    // Simulating different yoga information based on the selected health issue
    switch (selected) {
      case 'Stress':
        setYogaInformation({
            pose: "Child's Pose",
            benefits: 'Calms the mind, relieves stress and fatigue.',
            howToDo: 'Kneel on the floor and sit back on your heels. Lower your forehead to the ground...',
            image: 'childs-pose-balasana.jpg',
          });
          
                    
        break;
      case 'Back Pain':
        setYogaInformation({
          pose: 'Cat-Cow Pose',
          benefits: 'Improves spine flexibility, alleviates back pain.',
          howToDo: 'Get on your hands and knees. Inhale, arch your back and lift your head and tailbone...',
          image: 'https://via.placeholder.com/300',
        });
        break;
      case 'Anxiety':
        setYogaInformation({
          pose: 'Corpse Pose',
          benefits: 'Relaxes the body and mind, reduces anxiety.',
          howToDo: 'Lie on your back, close your eyes, and relax your entire body...',
          image: 'https://via.placeholder.com/300',
        });
        break;
      case 'Insomnia':
        setYogaInformation({
          pose: 'Legs-Up-The-Wall Pose',
          benefits: 'Promotes relaxation, aids in better sleep.',
          howToDo: 'Sit close to the wall, then lie on your back and extend your legs up the wall...',
          image: 'https://via.placeholder.com/300',
        });
        break;
      case 'Digestive Problems':
        setYogaInformation({
          pose: 'Seated Forward Bend',
          benefits: 'Stimulates digestion, relieves bloating and discomfort.',
          howToDo: 'Sit on the floor with legs extended, bend forward from the hips, reaching for your feet...',
          image: 'https://via.placeholder.com/300',
        });
        break;
      default:
        setYogaInformation(null);
    }
  };

  return (
    <div className="yoga-container">
      <h1>Yoga for Health</h1>
      <div className="dropdown-container">
        <label htmlFor="healthIssue">Select Health Issue:</label>
        <select id="healthIssue" onChange={handleSelectChange} value={selectedIssue}>
          <option value="">Select an issue</option>
          {healthIssues.map((issue, index) => (
            <option key={index} value={issue}>
              {issue}
            </option>
          ))}
        </select>
      </div>
      <div className="yoga-information">
        {yogaInformation && (
          <>
            <h2>{yogaInformation.pose}</h2>
            <img src={yogaInformation.image} alt={yogaInformation.pose} className="yoga-image" />
            <p><strong>Benefits:</strong> {yogaInformation.benefits}</p>
            <p><strong>How to do:</strong> {yogaInformation.howToDo}</p>
            {/* Add more yoga information here */}
          </>
        )}
      </div>
    </div>
  );
};

export default Yoga;
