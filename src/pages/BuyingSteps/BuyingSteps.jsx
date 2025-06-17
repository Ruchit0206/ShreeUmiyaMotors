import React from "react";
import "./BuyingSteps.css";

const steps = [
  {
    number: "1",
    title: "Add to cart",
    description: "Let your customers explore our wide range of vehicles.",
  },
  {
    number: "2",
    title: "Sign in",
    description: "Click on the number to adapt it to your purpose.",
  },
  {
    number: "3",
    title: "Pay",
    description: "Duplicate blocks to add more steps.",
  },
  {
    number: "4",
    title: "Get Delivered",
    description: "Select and delete blocks to remove some steps.",
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
