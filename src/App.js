import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  // State to track the current theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>

      <h1>Welcome to my themed app!</h1>
      <p>This is a simple app that toggles between light and dark themes.</p>
    </div>
  );
}

export default App;
