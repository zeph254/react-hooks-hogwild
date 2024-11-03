	
import React, { useState } from 'react';
import hogs from '../porkers_data';
import HogList from './HogList';
import AddHogForm from './AddHogForm';

function App() {
  const [hogData, setHogData] = useState(hogs);

  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  return (
    <div className="App">
      <h1>Hog Dashboard</h1>
      <HogList hogs={hogData} />
      <AddHogForm addHog={addHog} />
    </div>
  );
}

export default App;