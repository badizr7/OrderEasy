import React from 'react';
import './body.css';

const BodySection = () => {
  return (
    <div className="body-section">
      <div className="hero-image">
        <img src="/path/to/blue-network-image.jpg" alt="Network Background" />
        <p className="hero-text">¡Descubre la forma más cómoda y segura de comprar productos tecnológicos con nuestra página web!</p>
      </div>
      {/* Resto del contenido del dashboard */}
    </div>
  );
};

export default BodySection;