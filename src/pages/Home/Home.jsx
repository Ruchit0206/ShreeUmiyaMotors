import React from 'react';
import './Home.css';
// import homeBg from './Home.webp';
import PopularModels from '../Popular/PopularModels';
import BuyingSteps from '../BuyingSteps/BuyingSteps';
import OurVehicles from '../OurVehicles/OurVehicles';
import TeamSection from '../TeamSection/TeamSection';
import DeliveryHighlight from '../DeliveryHighlight/DeliveryHighlight'; 
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/Aboutus';



export default function Home () {
  return (
    <div>
    <div
      className="hero-section"
      
    >
      <div className="hero-content">
        <h5 className="hero-subtitle animate-text">Drive with Confidence:</h5>
        <h1 className="hero-title animate-text">Quality Cars Delivered to Your Driveway!</h1>
        <button className="cta-button">Book a Test Drive</button>

        {/* Scroll Down Arrow */}
        <div className="scroll-down-arrow"></div>
      </div>
<a
  href="tel:9999999999" // Replace with your phone number
  className="call-float"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/724/724664.png" // Call icon image
    alt="Call Us"
    className="call-icon"
  />
</a>



  
     
      
    </div>
           <AboutUs/>
    <PopularModels/>
       <BuyingSteps/>
       <ImageGallery/>
       {/* <DeliveryHighlight/> */}
       <TeamSection/>
       <OurVehicles/>
       <Services/>
    </div>
  );
};


