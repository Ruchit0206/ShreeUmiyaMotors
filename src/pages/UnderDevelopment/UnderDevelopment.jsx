import React from "react";
import "./UnderDevelopment.css";
import { Helmet } from "react-helmet-async";

const UnderDevelopment = () => {
  return (
    <div className="under-development-container">
       <Helmet>
             <title>Under Development - Shree Umiya Motors</title>
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
      <div className="under-development-content">
        <h1>🚧 Page Under Development</h1>
        <p>We're working hard to bring you this page soon.</p>
        <p>Thank you for your patience!</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
    