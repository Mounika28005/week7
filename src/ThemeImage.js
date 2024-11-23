import React, { useState } from 'react';
import lightImage from './path/to/light-mode-image.jpg'; 
import darkImage from './path/to/dark-mode-image.jpg';  

const ThemeImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundImage: `url(${isDarkMode ? darkImage : lightImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '20px',
        }}
      >
      </div>
    </div>
  );
};

export default ThemeImage;
