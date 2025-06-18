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

        <button className="book-btn" onClick={() => setShowModal(true)}>
          Book a Service
        </button>
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

    </section>
  );
};

export default Services;
