import React, { useState } from "react";
import "./ImageGallery.css";
import { Helmet } from "react-helmet-async";



const ImageGallery = ({ disableHelmet = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="inventory-gallery">
      {/* Helmet meta tags conditionally rendered */}
      {!disableHelmet && (
        <Helmet>
          <title>Success Stories - Shree Umiya Motors</title>
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

      <h1>Our Success Stories</h1>
      <h1>Coming Soon..</h1>

      {/* <div className="gallery-grid">
        {images.map((url, index) => (
          <div
            key={index}
            className={`gallery-card card-${index + 1}`}
            onClick={() => setSelectedImage(url)}
          >
            <img src={url} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div> */}

      <div className="gallery-text">
        <h2>Bringing Quality Vehicles to Your Driveway</h2>
        <p>
          Enhance your lifestyle with our exquisite vehicle selections and
          financing options. We offer a variety of models tailored to your needs.
        </p>
        <button className="inventory-btn">Explore Our Inventory</button>
      </div>

      {/* Image Modal */}
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
