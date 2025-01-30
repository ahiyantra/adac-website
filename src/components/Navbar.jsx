import React from 'react';

console.log('navbar dot js file address:', window.location.href);

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <a href="#about" className="nav-link">About</a>
      <a href="#services" className="nav-link">Services</a>
      <a href="#offers" className="nav-link">Offers</a>
      <a href="#contact" className="nav-link">Contact</a>
    </div>
  </nav>
);

export default Navbar;