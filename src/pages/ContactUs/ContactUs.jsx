import React from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <h4>Get in Touch</h4>

          <p><FaMapMarkerAlt /> Near Sargasan Cross Road, Opp. Bharat Petroleum, Gandhinagar, Gujarat - 382421</p>
          <p><FaMapMarkerAlt /> Nr. Bypass Road, Opp. ST Workshop, Himmatnagar, Gujarat - 383001</p>

          <p><FaPhoneAlt /> <a href="tel:+919099981277">+91 9099981277</a></p>
          <p><FaPhoneAlt /> <a href="tel:+919825753177">+91 9825753177</a></p>

          <p><FaEnvelope /> <a href="mailto:shreeumiyamotors@gmail.com">shreeumiyamotors@gmail.com</a></p>

          <div className="business-hours">
            <h4><FaClock style={{ marginRight: "5px" }} />Business Hours</h4>
            <p>Monday – Saturday: 9:30 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h4>Send us a Message</h4>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h3>Our Locations</h3>
        <div className="map-grid">
          {/* Gandhinagar Branch */}
          <div className="map-box">
            <a
              href="https://maps.app.goo.gl/knBsc1uQTyAh7mwP8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h4>Gandhinagar Branch</h4>
            </a>
            <iframe
              title="Gandhinagar Branch"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.582302839154!2d72.7318583!3d23.2332782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dd5001f220e65%3A0x15b9792b4c4b0547!2sShree%20Umiya%20Motors%20(Baxy%20Mobility)!5e0!3m2!1sen!2sin!4v1718709999999"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Himmatnagar Branch */}
          <div className="map-box">
            <a
              href="https://maps.app.goo.gl/6G7czqb7nYVBY7MKA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h4>Himmatnagar Branch</h4>
            </a>
            <iframe
              title="Himmatnagar Branch"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.719998563882!2d72.9478297!3d23.5889068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db991eee7b66d%3A0x15bc496b53c90677!2sBaxy%20Mobility%20(Shree%20Umiya%20Motors)!5e0!3m2!1sen!2sin!4v1750241557067!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>


{/* Sticky CTA Banner */}
<div className="cta-banner">
  Need help? Call us at <a style={{color: 'white', textDecoration: 'underline'}} href="tel:+919099981277">+91 9099981277</a>
</div>

    </div>
  );
};

export default ContactUs;
