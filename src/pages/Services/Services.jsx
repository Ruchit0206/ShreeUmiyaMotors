import React from "react";
import { Helmet } from "react-helmet-async";
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
  return (
    <section className="services-section">
      {!disableHelmet && (
        <Helmet>
          <title>Services - Shree Umiya Motors</title>
          <meta
            name="description"
            content="We provide authorized Baxy sales, garage services, and second-hand auto deals. Visit Shree Umiya Motors in Himmatnagar and Gandhinagar today!"
          />
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
    </section>
  );
};

export default Services;
