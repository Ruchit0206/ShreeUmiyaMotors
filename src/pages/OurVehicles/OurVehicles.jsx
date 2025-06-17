// import React from 'react';
// import './OurVehicles.css';

// const vehicleImages = [
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
//  "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png"
// ];

// const OurVehicles = () => {
//   return (
//     <div className="vehicles-wrapper">
//       <h2 className="vehicles-title">Our Vehicles</h2>
//       <p className="vehicles-subtitle">
//         Explore our curated selection of vehicles, each meticulously inspected to ensure quality, reliability, and a touch of luxury.
//       </p>
//       <div className="vehicle-grid">
//         {vehicleImages.map((img, index) => (
//           <img key={index} src={img} alt={`Vehicle ${index + 1}`} className="vehicle-img" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurVehicles;



import React, { useState } from 'react';
import './OurVehicles.css';

const vehicleData = [
  {
    img:"https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Bath Abbey",
    desc: "A historic site representing timeless design and architectural beauty."
  },
  {
    img:"https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Country Chapel",
    desc: "Perfectly preserved countryside chapel. Ideal for peaceful rides."
  },
  {
    img: "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Swaledale Valley",
    desc: "Explore nature’s raw beauty with reliable vehicle options."
  },
  {
    img: "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Montserrat Heights",
    desc: "Tour-ready for elevated drives with scenic views."
  },
  {
    img: "https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Abbey Interior",
    desc: "Interior comfort and visual elegance for every journey."
  },
  {
    img:"https://pnggallery.com/wp-content/uploads/auto-rickshaw-02.png",
    title: "Night Drive",
    desc: "Smooth experience even after sunset — stylish and secure."
  }
];

const OurVehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="vehicles-wrapper">
      <h2 className="vehicles-title">Our Vehicles</h2>
      <p className="vehicles-subtitle">
        Explore our curated selection of vehicles, each meticulously inspected to ensure quality, reliability, and a touch of luxury.
      </p>
      <div className="vehicle-grid">
        {vehicleData.map((vehicle, index) => (
          <img
            key={index}
            src={vehicle.img}
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
            <img src={selectedVehicle.img} alt={selectedVehicle.title} />
            <h3>{selectedVehicle.title}</h3>
            <p>{selectedVehicle.desc}</p>
            <button className="book-btn">Book Test Drive</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurVehicles;
