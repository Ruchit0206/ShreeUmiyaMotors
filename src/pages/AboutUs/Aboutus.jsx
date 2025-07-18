import React from 'react';
import { Helmet } from 'react-helmet-async'; // Correct Helmet import
import './AboutUs.css';
import BusinessStats from '../BusinessStats/BusinessStats';

const AboutUs = ({ disableHelmet }) => {
  return (
    <div className="about-container">
      {/* ✅ Helmet SEO (only if not disabled) */}
      {!disableHelmet && (
        <Helmet>
          <title>About Us - Shree Umiya Motors</title>
          <meta
            name="description"
            content="Learn more about Shree Umiya Motors, your trusted Baxy Mobility dealer in Gandhinagar and Himmatnagar. Established in 2022, we specialize in diesel, petrol, and electric rickshaws with full after-sales support."
          />
          <meta property="og:title" content="About Shree Umiya Motors - Baxy Auto Experts" />
          <meta property="og:description" content="Official Baxy rickshaw dealers offering full support, service parts, and in-house garage facilities since 2022." />
          <meta property="og:image" content="https://shreeumiyamotors.vercel.app/images/About.jpg" />
          <meta property="og:url" content="https://shreeumiyamotors.vercel.app/about" />
          <meta name="keywords" content="Shree Umiya Motors, Baxy Dealer, Auto Rickshaw Dealer, Gandhinagar, Himmatnagar, Electric Rickshaw" />
        </Helmet>
      )}

      {/* Page Content */}
      <h2><i className="fa-solid fa-forward"></i> About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Established in <strong>2022</strong>, Shree Umiya Motors is the official dealer of <strong>Baxy Mobility</strong> in Gandhinagar and Himatnagar.
            We take pride in offering a wide range of three-wheelers including <strong>Diesel, CNG, and Electric rickshaws</strong>.
          </p>
          <p>
            With a commitment to quality and service, we not only provide vehicles but also ensure complete support with our <strong>service parts, regular servicing, and in-house garage facility</strong>.
          </p>
          <p>
            Whether you're looking for sustainable transport solutions or reliable auto-rickshaws, we’re your one-stop destination.
          </p>

          <div className="location-sectiona">
            <h3 className='llocattions'>Our Locations</h3>
            <a href="https://maps.app.goo.gl/zhtkxfeLaQ69dHcu7" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: '5px' }}>
              <p>(1) Shree Umiya Motors - Himatnagar</p>
            </a>
            <a href="https://maps.app.goo.gl/9z6PL2zK3FTGi9Mq8" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: '5px' }}>
              <p>(2) Shree Umiya Motors - Gandhinagar</p>
            </a>
          </div>
        </div>

        <div className="about-image">
          <img src="/images/About.jpg" alt="Shree Umiya Motors" />
        </div>
      </div>
      <BusinessStats/>
    </div>
  );
};

export default AboutUs;
