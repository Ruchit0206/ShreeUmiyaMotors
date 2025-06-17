import React from "react";
import "./PopularModels.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const PopularModels = () => {
  const models = [
    {
      id: "01",
      title: "Sunset Motors",
      description: "Vibrant hues of red and blue capture the excitement and beauty of a summer drive.",
      image: img1,
    },
    {
      id: "02",
      title: "Elegant Performance",
      description: "Minimalist black sedans in a polished showroom, embodying sophistication and elegance.",
      image: img2,
    },
    {
      id: "03",
      title: "Auto Elegance",
      description: "Light silver models with sleek designs, bringing a touch of modern charm to any garage.",
      image: img3,
    },
    {
      id: "04",
      title: "Blushing Rides",
      description: "A stunning selection of SUVs and sedans, perfect for every lifestyle and budget.",
      image: img4,
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
            <img src={model.image} alt={model.title} loading="lazy" />
            <h3>{model.title}</h3>
            <p>{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularModels;
