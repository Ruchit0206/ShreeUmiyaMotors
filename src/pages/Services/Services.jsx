import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import
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

const Services = ({ disableHelmet = false }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="services-section">
      {/* ✅ Only render Helmet if allowed */}
      {!disableHelmet && (
        <Helmet>
          <title>Services - Shree Umiya Motors</title>
          <meta
            name="description"
            content="We provide authorized Baxy sales, garage services, and second-hand auto deals. Visit Shree Umiya Motors in Himmatnagar and Gandhinagar today!"
          />
          <meta property="og:title" content="Our Services - Shree Umiya Motors" />
          <meta property="og:description" content="From sales to repairs, we’re here to support all your auto needs." />
          <meta property="og:image" content="https://shreeumiyamotors.vercel.app/images/bindaas-01.webp" />
          <meta property="og:url" content="https://shreeumiyamotors.vercel.app/services" />
          <meta name="keywords" content="Baxy Repairs, Garage Service, Second-Hand Autos, Shree Umiya Motors" />
        </Helmet>
      )}

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
        <h3 className="LLocattions">Our Locations</h3>
        <p>(1) Shree Umiya Motors - Himatnagar</p>
        <p>(2) Shree Umiya Motors - Gandhinagar</p>
      </div>
    </section>
  );
};

export default Services;
