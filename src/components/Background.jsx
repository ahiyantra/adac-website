import React from 'react';
import '../styles/Background.css';

const Background = () => {
  const images = [
    'IMG-20250104-WA0073.jpg',
    'IMG-20250104-WA0083.jpg',
    'IMG-20250104-WA0084.jpg',
    'IMG-20250104-WA0085.jpg',
    'IMG-20250104-WA0086.jpg',
    'IMG-20250104-WA0088.jpg',
    'IMG-20250104-WA0093.jpg',
    'IMG-20250104-WA0095.jpg',
    'IMG-20250104-WA0096.jpg',
    'IMG-20250104-WA0098.jpg',
  ];

  return (
    <div className="background-container">
      <div className="background-slider">
        {images.map((image, index) => (
          <div key={index} className="background-slide">
            <img 
              src={`${process.env.PUBLIC_URL}/images/${image}`} 
              alt={`Clinic Service ${index + 1}`} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;