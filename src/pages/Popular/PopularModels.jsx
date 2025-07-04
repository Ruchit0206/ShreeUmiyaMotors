import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ Helmet import
import "./PopularModels.css";

const PopularModels = ({ disableHelmet = false }) => {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    {
      id: 1,
      title: "BAXY Bindaas Diesel",
      description: "Engine: Greaves BSVI OBD II Engine",
      description1: "Fuel: Diesel",
      description2: "Cargo Body: 5.5 Feet",
      image: "/images/bindaas-01.webp",
    },
    {
      id: 2,
      title: "Baxy Express CNG",
      description: "Engine: G 400 W VI Bi Fuel CNG",
      description1: "Fuel: CNG",
      description2: "Sitting Capacity: D+3",
      image: "/images/baxy-express-cng.webp",
    },
    {
      id: 3,
      title: "BAXY E Rath e-Rickshaw",
      description: "Battery & Charger: 65 V DC 15A Axion SMPS",
      description1: "Sitting Capacity: 4 Passenger + Driver",
      description2: "Ground Clearance: 160 mm",
      image: "/images/rath-2.png",
    },
    {
      id: 4,
      title: "Baxy Super King CNG Cargo",
      description: "Engine: G 400 W VI Bi Fuel CNG",
      description1: "Fuel: CNG",
      description2: "Cargo Body (Tray/Deck Size): 6.5 Feet",
      image: "/images/baxy-express-diesel-3.webp",
    },
    {
      id: 5,
      title: "Baxy Boss EV",
      description: "Power: 1.74 kW @ 1500 RPM; Battery: 105 Ah Lithium",
      description1: "Range: 100–110 km; Seating: Driver + 4",
      description2: "Wheelbase: 2090 mm; GC: 140 mm",
      image: "/images/baxy-boss.webp",
    },
    {
      id: 6,
      title: "Baxy Taksy EV",
      description: "Power: 1.74 kW @ 1500 RPM; Battery: 150 Ah (Li/Lead-acid)",
      description1: "Range: 110+ km; Seating: Driver + 4",
      description2: "Wheelbase: 2090 mm; GC: 140 mm",
      image: "/images/baxy-taksy.webp",
    },
    {
      id: 7,
      title: "Baxy Lion EV",
      description: "Power: 6.3 kW @ 38 km/h; Battery: 200 Ah Lithium",
      description1: "Range: 130+ km; Seating: Driver + 3",
      description2: "Wheelbase: 1940 mm; GC: 180 mm",
      image: "/images/baxy-lion.webp",
    },
    {
      id: 8,
      title: "Baxy Cub EV",
      description: "Power: 8 kW @ 38 km/h; Battery: 150 Ah Lithium",
      description1: "Range: 130+ km; Seating: Driver + 3",
      description2: "Wheelbase: 2000 mm; GC: 170 mm",
      image: "/images/baxy-cub.webp",
    },
    {
      id: 9,
      title: "Baxy E Lio EV",
      description: "Power: 1.75 kW @ 2200 RPM; Battery: 105 Ah Lithium",
      description1: "Range: 100–110 km; Seating: Driver + 4",
      description2: "Wheelbase: 2200 mm; GC: 150 mm",
      image: "/images/baxy-elio.webp",
    },
    {
      id: 10,
      title: "Baxy ShakteE EV",
      description: "Power: 1.74 kW; Battery: 105–150 Ah",
      description1: "Range: 110–120 km; GVW: 670–838 kg",
      description2: "Wheelbase: 2090 mm; GC: 140 mm",
      image: "/images/baxy-shaktee.webp",
    },
    {
      id: 11,
      title: "Baxy E Magnate Cargo EV",
      description: "Power: 6.3 kW; Battery: 200 Ah Lithium",
      description1: "Range: 130+ km; GVW: 995 kg",
      description2: "Wheelbase: 2110 mm; GC: 200 mm",
      image: "/images/baxy-magnate-cargo.webp",
    },
    {
      id: 12,
      title: "Baxy E Magnate Delivery Van EV",
      description: "Power: 6.3 kW; Battery: 200 Ah Lithium",
      description1: "Range: 130+ km; GVW similar to cargo",
      description2: "Wheelbase: 2110 mm; GC: 200 mm",
      image: "/images/baxy-magnate-delivery.webp",
    },
    {
      id: 13,
      title: "Baxy E-Cart LD EV",
      description: "Power: ~1.75 kW; Battery: 130 Ah Lead‑acid",
      description1: "Range: 100–110 km; GVW: ~780 kg",
      description2: "Wheelbase: 2220 mm; GC: 130–140 mm",
      image: "/images/baxy-e-cart-ld.webp",
    },
  ];

  return (
    <div className="popular-models">
      {/* ✅ Helmet for SEO */}
      {!disableHelmet && (
        <Helmet>
          <title>Popular Models | Shree Umiya Motors</title>
          <meta
            name="description"
            content="Explore our most popular Baxy Mobility vehicles including diesel, CNG, and electric models at Shree Umiya Motors."
          />
        </Helmet>
      )}

      <h2>
        Discover Our <span>Most Popular Models</span>
      </h2>
      <p className="subtitle">
        Celebrate with Our Best-Selling Models, perfect for every occasion.
      </p>

      <div className="models-grid">
        {models.map((model) => (
          <div className="model-card" key={model.id}>
            <p className="model-number">{model.id}</p>
            <div
              className="image-container"
              onClick={() => setSelectedModel(model)}
              style={{ cursor: "pointer" }}
            >
              <img src={model.image} alt={model.title} loading="lazy" />
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <p>{model.description1}</p>
              <p>{model.description2}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Image + Text */}
      {selectedModel && (
        <div className="modal-backdrop" onClick={() => setSelectedModel(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedModel(null)}
            >
              &times;
            </button>
            <img
              src={selectedModel.image}
              alt={selectedModel.title}
              className="modal-image"
            />
            <div className="modal-details">
              <h3>{selectedModel.title}</h3>
              <p>{selectedModel.description}</p>
              <p>{selectedModel.description1}</p>
              <p>{selectedModel.description2}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularModels;
