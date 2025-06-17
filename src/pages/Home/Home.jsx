import React from 'react';
import './Home.css';
import homeBg from './Home.webp';
import PopularModels from '../Popular/PopularModels';
import BuyingSteps from '../BuyingSteps/BuyingSteps';
import OurVehicles from '../OurVehicles/OurVehicles';
import TeamSection from '../TeamSection/TeamSection';
import DeliveryHighlight from '../DeliveryHighlight/DeliveryHighlight'; 
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';



export default function Home () {
  return (
    <div>
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="hero-content">
        <h5 className="hero-subtitle animate-text">Drive with Confidence:</h5>
        <h1 className="hero-title animate-text">Quality Cars Delivered to Your Driveway!</h1>
        <button className="cta-button">Book a Test Drive</button>

        {/* Scroll Down Arrow */}
        <div className="scroll-down-arrow"></div>
      </div>

      {/* Bottom Curve SVG */}
      <div className="curve-divider">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L30,202.7C60,181,120,139,180,117.3C240,96,300,96,360,106.7C420,117,480,139,540,160C600,181,660,203,720,197.3C780,192,840,160,900,133.3C960,107,1020,85,1080,106.7C1140,128,1200,192,1260,208C1320,224,1380,192,1410,176L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      
    </div>
    <PopularModels/>
       <BuyingSteps/>
       <ImageGallery/>
       <DeliveryHighlight/>
       <TeamSection/>
       <OurVehicles/>
       <Services/>
    </div>
  );
};


