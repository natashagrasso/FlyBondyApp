import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className=""> 
      <div className="mt-7 text-yellow-500 font-bold text-5xl px-3 py-3 relative text-shadow flex justify-center items-center">
        <span>FlyBondy App</span>
      </div>
  
      <Slider {...sliderSettings}>
        
        <div>
          <img src="/src/assets/Bariloch.png" alt="Bariloche" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/src/assets/Calafte.png" alt="Calafate" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/src/assets/MDZ.png" alt="Bariloche" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/src/assets/Salta.png" alt="Bariloche" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/src/assets/Ushuaia.png" alt="Ushuaia" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/src/assets/cba.png" alt="Cordoba" className="w-full h-auto"/>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
