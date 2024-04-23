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
            image: 'child-pose-balasana.jpg',
            FoodToAvoid : "1. Processed Foods  2. Caffeine  3. Sugar  4. Alcohol  5. Highly Spiced or Fried Foods.",
            FoodToFollow : "1. Complex Carbohydrates 2. Fruits and Vegetables 3. Dark chocolate 4. Magnesium-Rich Foods 5. Probiotic-Rich Foods"
          });
          
                    
        break;
      case 'Back Pain':
        setYogaInformation({
          pose: 'Cat-Cow Pose',
          benefits: 'Improves spine flexibility, alleviates back pain.',
          howToDo: 'Get on your hands and knees. Inhale, arch your back and lift your head and tailbone...',
          image: 'cat-cow-pose.jpg',
          FoodToAvoid : '1. Reduce Inflammatory Foods 2. Limit Highly Processed Foods 3. Maintain a Healthy Weight 4. Limit Salt Intake',
          FoodToFollow : '1. Fatty Fish 2. Leafy Greens 3. Broccoli 4. Nuts and Seeds 5. Water'
        });
        break;
      case 'Anxiety':
        setYogaInformation({
          pose: 'Corpse Pose',
          benefits: 'Relaxes the body and mind, reduces anxiety.',
          howToDo: 'Lie on your back, close your eyes, and relax your entire body...',
          image: 'corpose-pose.jpeg',
          FoodToAvoid : '1. Limit sugar and Proccessed foods 2. Protein rich foods 3. Magnesium rich foods 4. Herbal Teas',
          FoodToFollow : '1. Dark chocolate 2. Fatty Fish 3. Whole grains 4. Avocado 5. Oats.'

        });
        break;
      case 'Insomnia':
        setYogaInformation({
          pose: 'Legs-Up-The-Wall Pose',
          benefits: 'Promotes relaxation, aids in better sleep.',
          howToDo: 'Sit close to the wall, then lie on your back and extend your legs up the wall...',
          image: 'Legs-up-the-wall.jpg',
          FoodToAvoid : '1. Caffeine 2. Heavy and spicy meals 3. Nicotine 4. Alcohol 5. High sugar foods',
          FoodToFollow : '1. Vitamin B6-Rich Foods 2. Calcium-Rich Foods 3. Fruits with Natural Sugars 4. Whole Grains'
        });
        break;
      case 'Digestive Problems':
        setYogaInformation({
          pose: 'Seated Forward Bend',
          benefits: 'Stimulates digestion, relieves bloating and discomfort.',
          howToDo: 'Sit on the floor with legs extended, bend forward from the hips, reaching for your feet...',
          image: 'seated-forward-bend.jpg',
          FoodToAvoid: '1. Gas-Producing Vegetables 2. Alcohol 3. Caffeine 4. High-Fiber Foods (in Excess)',
          FoodToFollow: '1. Fiber-Rich Foods 2. 2. Probiotic-Rich Foods 3. Papaya 4. Whole Grains 5. Hydrating Foods.'
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
            <p><strong>Food To avoid:</strong>{yogaInformation.FoodToAvoid}</p>
            <p><strong> Food to be follow:</strong>{yogaInformation.FoodToFollow}</p>
            {/* Add more yoga information here */}
          </>
        )}
      </div>
    </div>
  );
};

export default Yoga;
