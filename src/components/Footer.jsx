// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-about">
  <h2><strong>About</strong> Us</h2>
  <p>
    Shree Umiya Motors, established in 2022, is an official dealer of BAXY Auto Rickshaws and E-Rickshaws in Gujarat. 
    We offer reliable, eco-friendly transport solutions that support sustainable mobility and customer satisfaction.
  </p>
</div>

        <div className="footer-contact">
          <h4><strong>My Company</strong></h4>
          <p>250 Executive Park Blvd, Suite 3400</p>
          <p>San Francisco CA 94134</p>
          <p>United States</p>
        </div>

        <div className="footer-info">
          <p><FaPhoneAlt />+91 9099981277</p>
          <p><FaEnvelope /> shreeumiyamotors@gmail.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <p className="footer-bottom">Copyright © Company name</p>
    </footer>
  );
};

export default Footer;
