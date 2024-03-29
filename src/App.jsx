import React, { useState } from 'react';

// Color component with onClick property
const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  // Using useState hook to manage selectedColor state
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      {/* Displaying currently selectedColor */}
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* Passing setSelectedColor function to each Color component */}
        <Color color="yellow" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;