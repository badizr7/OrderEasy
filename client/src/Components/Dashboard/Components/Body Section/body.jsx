import React from 'react';
import './body.css';
import video from '../../../../LoginAssets/video.mp4'
const BodySection = () => {
  return (
    <div className="body-section">
      <div className="hero-image">
       
        <video src={video} autoPlay muted loop></video>
        <p className="hero-text">¡Descubre la forma más cómoda y segura de comprar productos tecnológicos con nuestra página web!</p>
      </div>
      {/* Resto del contenido del dashboard */}
    </div>
  );
};

export default BodySection;