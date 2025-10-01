import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

import PopularModels from '../Popular/PopularModels';
import BuyingSteps from '../BuyingSteps/BuyingSteps';
// import OurVehicles from '../OurVehicles/OurVehicles';
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/Aboutus';
import ContactUs from '../ContactUs/ContactUs';
import { Link } from 'react-router-dom';
import ReviewsSection from '../Review/review';

export default function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* ✅ Helmet only here */}
      <Helmet>
        <title>HomePage - Shree Umiya Motors</title>
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

      <div className="hero-section">
        <div className="hero-content">
          <h3 className="hero-subtitle animate-text">Drive with Confidence:</h3>
          <h1 className="hero-title animate-text">Rickshaws That Power Your Everyday Hustle.</h1>
          <Link to="/BookTestDrive">
            <button className="cta-button">Book a Test Drive</button>
          </Link>
          <div className="scroll-down-arrow" onClick={scrollToAboutSection}></div>
        </div>

        <a
  href="https://wa.me/919099981277"
  target="_blank"
  rel="noopener noreferrer"
  className="call-float"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp Us"
    className="call-icon"
  />
</a>

      </div>

      <div ref={aboutSectionRef} className="scroll-section">
        <AboutUs disableHelmet={true} />

      </div>
       <Services disableHelmet={true} />
        <BuyingSteps />

      <PopularModels disableHelmet={true}/>
     
      <ImageGallery disableHelmet={true}/>
      {/* <OurVehicles  disableHelmet={true}/> */}
      <ReviewsSection></ReviewsSection>
     
      <ContactUs  disableHelmet={true}/>
    </div>
  );
}
