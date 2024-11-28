import React from "react";
import lap from "/assets/images/headphone.png";

const LaptopComponent = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md bg-pink-500 mb-8 mt-8">
        {/* Left Content */}
        <div className="text-white lg:w-1/3 space-y-3 lg:space-y-4 text-center lg:text-left">
          <p className="text-xs md:text-sm uppercase tracking-wide">30% OFF</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            FINE SMILE
          </h1>
          <p className="text-xs md:text-sm">10 Jan to 28 Jan</p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center w-full lg:w-1/3 my-6 lg:my-0">
          <img
            src={lap}
            alt="Headphones"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="text-white lg:w-1/3 space-y-3 lg:space-y-4 text-center lg:text-left">
          <h2 className="text-sm sm:text-base uppercase font-medium tracking-wide">
            Air Solo Bass
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Winter Sale
          </h3>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            reprehenderit.
          </p>
          <button className="px-6 py-2 bg-white text-pink-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaptopComponent;
