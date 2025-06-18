import React,{useRef} from 'react';
import './Home.css';
// import homeBg from './Home.webp';
import PopularModels from '../Popular/PopularModels';
import BuyingSteps from '../BuyingSteps/BuyingSteps';
import OurVehicles from '../OurVehicles/OurVehicles';
import TeamSection from '../TeamSection/TeamSection';
// import DeliveryHighlight from '../DeliveryHighlight/DeliveryHighlight'; 
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/Aboutus';
import ContactUs from '../ContactUs/ContactUs';
import BookTestDrive from '../Test Drive/BookTestDrive';
import { Link } from 'react-router-dom';



export default function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h5 className="hero-subtitle animate-text">Drive with Confidence:</h5>
          <h1 className="hero-title animate-text">Quality Cars Delivered to Your Driveway!</h1>
          <Link to ="/BookTestDrive"><button className="cta-button">Book a Test Drive</button></Link>

          <div className="scroll-down-arrow" onClick={scrollToAboutSection}></div>
        </div>
        {/* Call Floating Button */}
        <a href="tel:9099981277" className="call-float">
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Call Us" className="call-icon" />
        </a>
      </div>

     <div ref={aboutSectionRef} className="scroll-section">
  <AboutUs />
</div>


      <PopularModels />
      <BuyingSteps />
      <ImageGallery />
      <TeamSection />
      <OurVehicles />
      <Services />
      <ContactUs />
    </div>
  );
}


