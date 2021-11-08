import React from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Description from './Description';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Services 
        heading="Popular services in Your Area."
        image1="https://production-next-images-cdn.thumbtack.com/i/318793008367067357/width/640/aspect/8-5.webp"
        image2="https://production-next-images-cdn.thumbtack.com/i/323489611327971335/width/640/aspect/8-5.webp"
        image3="https://production-next-images-cdn.thumbtack.com/i/323761720722374783/width/640/aspect/8-5.webp"
        title1="House Cleaning"
        title2="Handyman"
        title3="Massage Therapy"
      />
      <Description />
      <Services 
        heading="Explore more projects."
        image1="https://production-next-images-cdn.thumbtack.com/i/392165647539290115/width/640/aspect/8-5.webp"
        image2="https://production-next-images-cdn.thumbtack.com/i/404088898316836866/width/640/aspect/8-5.webp"
        image3="https://production-next-images-cdn.thumbtack.com/i/404088720350167053/width/640/aspect/8-5.webp"
        title1="Essential home services"
        title2="Outdoor upkeep"
        title3="Healthy at home"
      />
      {/* Description */}
      
      <Services 
        heading="Get free cost estimates."
        image1="https://production-next-images-cdn.thumbtack.com/i/318793008367067357/width/640/aspect/8-5.webp"
        image2="https://production-next-images-cdn.thumbtack.com/i/302055595217092758/width/640/aspect/8-5.webp"
        image3="https://production-next-images-cdn.thumbtack.com/i/327799254292824113/width/640/aspect/8-5.webp"
        title1="House Cleaning"
        title2="Phone or tablet repair"
        title3="New home construction"
      />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
