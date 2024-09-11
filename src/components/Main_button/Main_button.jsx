import React from 'react';
import "./Main_button.scss";

function Main_button({ children }) {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button id="main-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Main_button;
