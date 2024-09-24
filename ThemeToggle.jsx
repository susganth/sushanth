import React, { useState, useEffect } from 'react';



const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage or default to false
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Update the DOM when the mode changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Save the preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <p>Current mode: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default ThemeToggle;