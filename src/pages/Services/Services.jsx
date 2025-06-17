import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: "Authorized Baxy Dealer",
    icon: "🚛",
    description: "We are proud to be an official authorized dealer of Baxy Mobility. Discover our latest range of electric and passenger rickshaws with trusted performance."
  },
  {
    title: "Garage & Repair Service",
    icon: "🔧",
    description: "Our expert mechanics offer repair and maintenance for all rickshaw brands. From engine issues to electric faults, we’ve got your ride covered."
  },
  {
    title: "Second-Hand Rickshaw Sales",
    icon: "♻️",
    description: "Looking for a budget-friendly ride? We also offer well-maintained second-hand rickshaws at affordable prices with full inspection reports."
  }
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Delivering trust, quality, and complete support to our customers.</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <button className="book-btn" onClick={() => setShowModal(true)}>Book a Service</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>×</span>
            <h3>Book a Service</h3>
            <form className="service-form">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Service Details..." required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999" // Replace with your number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
      </a>
    </section>
  );
};

export default Services;
