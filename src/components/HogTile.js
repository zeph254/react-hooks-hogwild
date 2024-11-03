	
import React, { useState } from 'react';

const HogTile = ({ hog, hideHog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails(!showDetails);
  const handleHide = () => hideHog(hog.name);

  return (
    <div className="hog-tile" onClick={handleClick}>
      <img src={hog.image} alt={hog.name} className='Play'/>
      <h2>{hog.name}</h2>
      {showDetails && (
        <div className="hog-details">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} kg</p>
          <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
      <button onClick={handleHide}>Hide</button>
    </div>
  );
};

export default HogTile;