import React from "react";
import "./PopularModels.css";
// import img1 from "./bindaas-01.webp";
// import img2 from "./baxy-express-cng.webp";
// import img3 from "./rath-2.png";
// import img4 from "./baxy-express-diesel-3.webp";

const PopularModels = () => {
  const models = [
    {
    title: "BAXY Bindaas Diesel",
    description: "Engine: Greaves BSVI OBD II Engine",
    description1: "Fuel: Diesel",
    description2: "Cargo Body: 5.5 Feet",
    image: "/images/bindaas-01.webp",
  },
  {
    title: "Baxy Express CNG",
    description: "Engine: G 400 W VI Bi Fuel CNG",
    description1: "Fuel: CNG",
    description2: "Sitting Capacity: D+3",
    image: "/images/baxy-express-cng.webp",
  },
  {
    title: "BAXY E Rath e-rickshaw",
    description: "Battery & Charger: 65 V DC 15A Axion SMPS",
    description1: "Sitting Capacity: 4 Passenger + Driver",
    description2: "Ground Clearance: 160 mm",
    image: "/images/rath-2.png",
  },
  {
    title: "Baxy Super King CNG Cargo",
    description: "Engine: G 400 W VI Bi Fuel CNG",
    description1: "Fuel: CNG",
    description2: "Cargo Body (Tray/Deck Size): 6.5 Feet",
    image: "/images/baxy-express-diesel-3.webp",
  },
  ];

  return (
    <div className="popular-models">
      <h2>Discover Our <span>Most Popular Models</span></h2>
      <p className="subtitle">
        Celebrate with Our Best-Selling Models, perfect for every occasion.
      </p>
      <div className="models-grid">
        {models.map((model) => (
          <div className="model-card" key={model.id}>
            <p className="model-number">{model.id}</p>
            <div className="image-container">
            <img src={model.image} alt={model.title} loading="lazy" />
            <h3>{model.title}</h3>
            <p>{model.description}</p>
            <p>{model.description1}</p>
            <p>{model.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularModels;
