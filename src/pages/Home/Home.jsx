import React, { useRef } from 'react';
import { Helmet } from 'react-helmet'; // ✅ Helmet import
import './Home.css';

import PopularModels from '../Popular/PopularModels';
import BuyingSteps from '../BuyingSteps/BuyingSteps';
import OurVehicles from '../OurVehicles/OurVehicles';
import TeamSection from '../TeamSection/TeamSection';
import ImageGallery from '../ImageGallery/ImageGallery';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/Aboutus';
import ContactUs from '../ContactUs/ContactUs';
import { Link } from 'react-router-dom';

export default function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>Home | Shree Umiya Motors - Quality Baxy Autos at Your Service</title>
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
          <h5 className="hero-subtitle animate-text">Drive with Confidence:</h5>
          <h1 className="hero-title animate-text">Quality Cars Delivered to Your Driveway!</h1>
          <Link to="/BookTestDrive">
            <button className="cta-button">Book a Test Drive</button>
          </Link>
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
