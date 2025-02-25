import React from 'react';

console.log('footer dot js file address:', window.location.href);

const Footer = () => (
  <footer className="footer">
    <p><small>&copy; {new Date().getFullYear()}, Agastya Dental & Aesthetic Clinic (ADAC). All Rights Reserved.</small></p>
    <p><small><small>Made By AhiYantra (<a href="https://github.com/ahiyantra">@ahiyantra</a>)</small></small></p>
  </footer>
);

export default Footer;
