import React from 'react';
import './AboutUs.css';
import aboutImage from './About.jpg'; // Replace with your actual image

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2><i className="fa-solid fa-forward"></i> About Us</h2>
      <div className="about-content">
        <div className="about-text">
          
          <p>
            Established in <strong>2022</strong>, Shree Umiya Motors is the official dealer of <strong>Baxy Mobility</strong> in Gandhinagar and Himmatnagar.
            We take pride in offering a wide range of three-wheelers including <strong>diesel, petrol, and electric rickshaws</strong>.
          </p>
          <p>
            With a commitment to quality and service, we not only provide vehicles but also ensure complete support with our <strong>service parts, regular servicing, and in-house garage facility</strong>.
          </p>
          <p>
            Whether you're looking for sustainable transport solutions or reliable auto-rickshaws, we’re your one-stop destination.
          </p>
          <div className="location-section">
        <h3 className='LLocattions'>Our Locations</h3>
        <p>(1)Shree Umiya Motors - Himmatnagar</p>
        <p>(2)Shree Umiya Motors - Gandhinagar</p>
        
      </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Shree Umiya Motors" />
        </div>
      </div>

      {/* Location Section */}
      
    </div>
  );
};

export default AboutUs;
