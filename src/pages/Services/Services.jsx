import React from "react";
import { Helmet } from "react-helmet-async";
import "./Services.css";

const services = [
  {
    title: "Authorized Baxy Dealer",
    icon: "🚛",
    description:
      "We are proud to be an official authorized dealer of Baxy Mobility. Explore our range of cng, electric and diesel rickshaws backed by trust and performance.",
  },
  {
    title: "Loan Assistance",
    icon: "💰",
    description:
      "Need help financing your rickshaw? We provide hassle-free loan assistance with minimal paperwork and quick approvals.",
  },
  {
    title: "Servicing & Maintenance",
    icon: "🛠️",
    description:
      "From regular servicing to advanced repairs, our expert garage team ensures your rickshaw stays in perfect condition.",
  },
  {
    title: "Second-Hand Rickshaw Sales",
    icon: "♻️",
    description:
      "Looking for an affordable ride? Choose from our inspected and verified second-hand rickshaws with warranty options.",
  },
  {
    title: "Buyback Offer",
    icon: "🔄",
    description:
      "Upgrade easily! Get a great deal on your old rickshaw when you buy a new one from us. Instant valuation and transparent process.",
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
            content="We provide Baxy rickshaw sales, loan assistance, servicing, second-hand deals, and buyback offers. Visit Shree Umiya Motors in Himmatnagar today!"
          />
        </Helmet>
      )}

      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From purchase to servicing and resale — Shree Umiya Motors has you covered!
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
