import React from 'react';
// import Navbar from './components/Navbar/Navbar.jsx';
import Navbar from './components/Navbar';
// import HomePage from './page/Home/Home';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home/Home';
import Footer from './components/Footer';
import PopularModels from './pages/Popular/PopularModels';
import BuyingSteps from './pages/BuyingSteps/BuyingSteps';
import ImageGallery from './pages/ImageGallery/ImageGallery';
import DeliveryHighlight from './pages/DeliveryHighlight/DeliveryHighlight';
import TeamSection from './pages/TeamSection/TeamSection';
import OurVehicles from './pages/OurVehicles/OurVehicles';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/Aboutus';

function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/ourvehicles' element={<OurVehicles/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
