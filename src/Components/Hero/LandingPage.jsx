import React from 'react';
import img4 from "/assets/images/img4.jpg"
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img4} // Replace with your product image
          alt="Product Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Introducing the Vivo <span className="text-blue-500">V27 Series</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Elevate your smartphone experience with cutting-edge technology and stunning design.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Learn More
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
