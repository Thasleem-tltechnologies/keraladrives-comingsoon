import React from 'react';
import '../styles/Logo.css';
import logoImage from '../components/kd2.png'; // Make sure to place your image in the assets folder

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-image" src={logoImage} alt="Kerala Drives Logo" />
    </div>
  );
};

export default Logo;