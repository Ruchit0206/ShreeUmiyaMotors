import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Authorized Baxy Dealer",
    icon: "🚛",
    description:
      "We are proud to be an official authorized dealer of Baxy Mobility. Discover our latest range of electric and passenger rickshaws with trusted performance.",
  },
  {
    title: "Garage & Repair Service",
    icon: "🔧",
    description:
      "Our expert mechanics offer repair and maintenance for all rickshaw brands. From engine issues to electric faults, we’ve got your ride covered.",
  },
  {
    title: "Second-Hand Rickshaw Sales",
    icon: "♻️",
    description:
      "Looking for a budget-friendly ride? We also offer well-maintained second-hand rickshaws at affordable prices with full inspection reports.",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Delivering trust, quality, and complete support to our customers.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdropp" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>
              ×
            </span>
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

     <div className="location-section">
        <h3 className='LLocattions'>Our Locations</h3>
        <p>(1)Shree Umiya Motors - Himmatnagar</p>
        <p>(2)Shree Umiya Motors - Gandhinagar</p>
        
      </div>

    </section>
  );
};

export default Services;
