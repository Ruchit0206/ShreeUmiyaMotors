import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

import HomePage from './pages/Home/Home';
import Services from './pages/Services/Services';
import OurVehicles from './pages/OurVehicles/OurVehicles';
import ImageGallery from './pages/ImageGallery/ImageGallery';
import AboutUs from './pages/AboutUs/Aboutus';
import ContactUs from './pages/ContactUs/ContactUs';
import TeamSection from './pages/TeamSection/TeamSection';
import BookTestDrive from './pages/Test Drive/BookTestDrive';

function App() {
  return (
    <>
      {/* ✅ Global Helmet fallback and JSON-LD */}
      <Helmet>
        <title>Shree Umiya Motors | Baxy Auto Dealer in Himmatnagar and Gandhinagar</title>
        <meta
          name="description"
          content="Explore Baxy auto models at Shree Umiya Motors in Himmatnagar and Gandhinagar. Book test drives, check vehicle details, and contact us easily."
        />
        <meta property="og:image" content="https://shreeumiyamotors.vercel.app/images/bindaas-01.webp" />

        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Shree Umiya Motors",
              "image": "https://shreeumiyamotors.vercel.app/logo.jpg",
              "url": "https://shreeumiyamotors.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Add your full address here",
                "addressLocality": "Himmatnagar",
                "addressRegion": "Gujarat",
                "postalCode": "383001",
                "addressCountry": "IN"
              },
              "telephone": "+91-9876543210",
              "priceRange": "₹₹",
              "openingHours": "Mo-Sa 09:00-19:00"
            }
          `}
        </script>
      </Helmet>

      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourvehicles" element={<OurVehicles />} />
        <Route path="/success" element={<ImageGallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/BookTestDrive" element={<BookTestDrive />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
