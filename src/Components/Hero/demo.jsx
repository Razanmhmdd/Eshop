import React from "react";

const qw = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Elevate Your Shopping Experience
          </h1>
          <p className="text-lg text-gray-600">
            Discover the latest products and best deals. Unparalleled quality, amazing offers, and exclusive discounts await you!
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-400">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Hero Product"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default qw;
