// import React from "react";
// import "./ImageGallery.css";

// const images = [
//   "https://images.unsplash.com/photo-1528901166007-3784c7dd3653", // Church - Large
//   "https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mountain
//   "https://images.unsplash.com/photo-1750128839549-d918cc10dc6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Blue sky cathedral - Large
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Green Valley - Medium
//   "https://images.unsplash.com/photo-1749498682646-45e7c11506ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chandelier - Small
// ];

// const InventoryGallery = () => {
//   return (
//     <section className="inventory-gallery">
//       <div className="gallery-grid">
//         {images.map((url, index) => (
//           <div key={index} className={`gallery-card card-${index + 1}`}>
//             <img src={url} alt={`Gallery ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       <div className="gallery-text">
//         <h2>Bringing Quality Vehicles to Your Driveway</h2>
//         <p>
//           Enhance your lifestyle with our exquisite vehicle selections and
//           financing options. We offer a variety of models tailored to your needs.
//         </p>
//         <button className="inventory-btn">Explore Our Inventory</button>
//       </div>
//     </section>
//   );
// };

// export default InventoryGallery;



import React, { useState } from "react";
import "./ImageGallery.css";
 const images = [
  "https://images.unsplash.com/photo-1528901166007-3784c7dd3653", // Church - Large
  "https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mountain
  "https://images.unsplash.com/photo-1750128839549-d918cc10dc6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Blue sky cathedral - Large
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Green Valley - Medium
  "https://images.unsplash.com/photo-1749498682646-45e7c11506ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chandelier - Small
];


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="inventory-gallery">
      <h1>Our Success Stories</h1>
      <div className="gallery-grid">
        {images.map((url, index) => (
          <div
            key={index}
            className={`gallery-card card-${index + 1}`}
            onClick={() => setSelectedImage(url)}
          >
            <img src={url} alt={`Gallery ${index + 1}`} loading="lazy"  />
          </div>
        ))}
      </div>

      <div className="gallery-text">
        <h2>Bringing Quality Vehicles to Your Driveway</h2>
        <p>
          Enhance your lifestyle with our exquisite vehicle selections and
          financing options. We offer a variety of models tailored to your needs.
        </p>
        <button className="inventory-btn">Explore Our Inventory</button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-modal" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Full view" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
