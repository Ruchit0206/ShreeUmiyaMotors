// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h2><strong>About</strong> Us</h2>
          <p>
            Shree Umiya Motors, established in 2022, is an official dealer of BAXY Auto Rickshaws and E-Rickshaws in Gujarat. 
            We offer reliable, eco-friendly transport solutions that support sustainable mobility and customer satisfaction.
          </p>
        </div>

        {/* Location Section */}
        <div className="footer-contact">
          <h4><strong>Our Locations</strong></h4>

          <p>
           <strong style={{color:"yellow",fontSize:"large"}}>Gandhinagar Branch:</strong><br />
            Near Sargasan Cross Road, Opp. Bharat Petroleum, Gandhinagar, Gujarat - 382421{' '}
            <a 
              href="https://maps.app.goo.gl/9z6PL2zK3FTGi9Mq8" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', marginLeft: '5px' }}
              title="View on Map"
            >
              <FaMapMarkerAlt />
            </a>
          </p>

          <p>
            <strong style={{color:"yellow",fontSize:"large"}}>Himmatnagar Branch:</strong><br />
            Nr. Bypass Road, Opp. ST Workshop, Himmatnagar, Gujarat - 383001{' '}
            <a 
              href="https://maps.app.goo.gl/zhtkxfeLaQ69dHcu7"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', marginLeft: '5px' }}
              title="View on Map"
            >
              <FaMapMarkerAlt />
            </a>
          </p>
        </div>

        {/* Contact and Social Section */}
      
<div className="footer-info">
   <h4><strong>Inquire Us </strong></h4>


  <div className="inquiry-box">
    <label htmlFor="inquiry"></label>
    <input
      type="text"
      id="inquiry"
      placeholder="Enter your query..."
    />
  </div>
   <p>
            <FaPhoneAlt />
            <a href="tel:+919099981277" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>
              +91 9099981277
            </a>
          </p>
  <a href="mailto:shreeumiyamotors@gmail.com" >
  <p style={{color: 'white', textDecoration: 'none',}}>
    <FaEnvelope style={{ marginRight: '10px' ,color: 'white', textDecoration: 'none',}} />
    shreeumiyamotors@gmail.com
  </p>
</a>





  

  <div className="social-icons">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
  </div>
</div>


      </div>
      <p className="footer-bottom">Copyright © Shree Umiya Motors</p>
    </footer>
  );
};

export default Footer;
