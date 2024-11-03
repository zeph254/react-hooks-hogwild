import React, { useState } from 'react';
import HogTile from './HogTile';
  

const HogList = ({ hogs }) => {
  const [greased, setGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const filteredHogs = hogs.filter(hog => !hiddenHogs.has(hog.name) && (!greased || hog.greased));

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortBy === 'weight') return a.weight - b.weight;
    return a.name.localeCompare(b.name);
  });

  const toggleGreased = () => setGreased(!greased);
  const hideHog = (name) => {
    const updatedHiddenHogs = new Set(hiddenHogs);
    updatedHiddenHogs.add(name);
    setHiddenHogs(updatedHiddenHogs);
  };

  return (
    <div className='stew'>
        {/* <div className="container">
          <div className='mt-4'> */}
      <button onClick={toggleGreased}>{greased ? 'Show All' : 'Show Greased'}</button>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
      <div className="hog-list">
        {sortedHogs.map(hog => (
          <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
        ))}
      </div>
      </div>
    //   </div>
    // </div>
  );
};

export default HogList;