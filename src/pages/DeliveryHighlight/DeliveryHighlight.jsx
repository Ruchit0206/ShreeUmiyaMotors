import React from 'react';
import './DeliveryHighlight.css';


const DeliveryHighlight = () => {
  return (
    <div className="delivery-highlight">
      <div className="image-section">
        <img src="https://my.alfred.edu/zoom/_images/foster-lake.jpg" alt="UPS Delivery" />
      </div>
      <div className="text-section">
        <small>Global 24–Hour Vehicle Delivery</small>
        <h2>
          Brighten any journey with our express vehicle delivery service across the country.
        </h2>
      </div>
    </div>
  );
};

export default DeliveryHighlight;
