import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
      <ScrollToTop /> {/* Works because <BrowserRouter> is in index.js */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourvehicles" element={<OurVehicles />} />
        <Route path="/success" element={<ImageGallery/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/team" element={<TeamSection/>}/>
        <Route path="/BookTestDrive" element={<BookTestDrive/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
