import React from 'react';
import Carousel from './Carousel';

const Header = () => {
  return (
    <div className="relative h-[60vh]">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">CEJuFF</h2>
          <p className="text-xl">Excellence et expertise à votre service</p>
        </div>
      </div>
    </div>
  );
};

export default Header;