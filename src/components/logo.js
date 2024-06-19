import React from 'react';
import logo from '../assets/ACPC logo.png'; // Ensure to save the logo image in the assets folder

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Agricultural Credit Policy Council" className="logo" />
    </div>
  );
};

export default Logo;