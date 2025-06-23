import React from "react";
import "./BuyingSteps.css";

const steps = [
  {
    number: "1",
    title: "Visit or Call Us",
    description: "Connect with our team or walk into the showroom to begin your booking process.",
  },
  {
    number: "2",
    title: "Select Your Model",
    description: "Choose from our range of Baxy Mobility auto rickshaw models that suit your needs.",
  },
  {
    number: "3",
    title: "Payment & Exchange",
    description: "Pay via cash, cheque, loan, or other available options.Exchange is also available if applicable.",
  },
  {
    number: "4",
    title: "Delivery",
    description: "Receive your vehicle with full documentation and customer support.",
  },
];

const BuyingSteps = () => {
  return (
    <section className="buying-section">
      <h2 className="buying-title">Our buying process in four simple steps</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="step-box">
              <div className="step-circle">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index !== steps.length - 1 && (
              <>
                <div className="arrow arrow-desktop">→</div>
                <div className="arrow arrow-mobile">↓</div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BuyingSteps;
