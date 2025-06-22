import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurVehicles.css';
import { Helmet } from 'react-helmet-async';

const vehicleData = [
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
  {
    title: "BAXY Bindaas Diesel",
    description: "Engine: Greaves BSVI OBD II Engine",
    description1: "Fuel: Diesel",
    description2: "Cargo Body: 5.5 Feet",
    image: "/images/baxy-super-cargo.webp",
  },
  {
    title: "BAXY Bindaas Diesel",
    description: "Engine: Greaves BSVI OBD II Engine",
    description1: "Fuel: Diesel",
    description2: "Cargo Body: 5.5 Feet",
    image: "/images/baxy-superking1.webp",
  },
  {
    title: "BAXY Bindaas Diesel",
    description: "Engine: Greaves BSVI OBD II Engine",
    description1: "Fuel: Diesel",
    description2: "Cargo Body: 5.5 Feet",
    image: "/images/Express_Auto.png",
  },
];

const OurVehicles = ({ disableHelmet = false }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const openModal = (vehicle) => setSelectedVehicle(vehicle);
  const closeModal = () => setSelectedVehicle(null);

  return (
    <div className="vehicles-wrapper">
      {/* Only apply Helmet if not disabled */}
      {!disableHelmet && (
        <Helmet>
          <title>Our Vehicles - Shree Umiya Motors</title>
          <meta
            name="description"
            content="Welcome to Shree Umiya Motors. Explore new and second-hand Baxy rickshaws, book test drives, and experience excellent service at our Himmatnagar and Gandhinagar branches."
          />
          <meta property="og:title" content="Shree Umiya Motors - Your Trusted Baxy Dealer" />
          <meta property="og:description" content="Book a test drive, explore our vehicle range, or visit our showrooms in Himmatnagar and Gandhinagar." />
          <meta property="og:image" content="https://shreeumiyamotors.vercel.app/images/bindaas-01.webp" />
          <meta property="og:url" content="https://shreeumiyamotors.vercel.app/" />
          <meta name="keywords" content="Baxy Rickshaws, Auto Dealers Himmatnagar, Shree Umiya Motors, Test Drive, Baxy Electric" />
        </Helmet>
      )}

      <h2 className="vehicles-title">Our Vehicles</h2>
      <p className="vehicles-subtitle">
        Explore our curated selection of vehicles, each meticulously inspected to ensure quality, reliability, and a touch of luxury.
      </p>

      <div className="vehicle-grid">
        {vehicleData.map((vehicle, index) => (
          <img
            key={index}
            src={vehicle.image}
            alt={vehicle.title}
            className="vehicle-img"
            onClick={() => openModal(vehicle)}
          />
        ))}
      </div>

      {selectedVehicle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedVehicle.image} alt={selectedVehicle.title} />
            <h3>{selectedVehicle.title}</h3>
            <p>{selectedVehicle.description}</p>
            <p>{selectedVehicle.description1}</p>
            <p>{selectedVehicle.description2}</p>
            <Link to="/BookTestDrive">
              <button className="book-btn">Book Test Drive</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurVehicles;
