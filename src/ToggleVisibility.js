import React, { useState } from 'react';

function ToggleVisibility() {
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && (
        <>
          <img src="https://via.placeholder.com/150" alt="Sample" />
          <p>This is a paragraph of text.</p>
        </>
      )}
    </div>
  );
}

export default ToggleVisibility;
