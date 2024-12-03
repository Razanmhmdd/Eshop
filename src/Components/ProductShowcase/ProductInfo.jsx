import React from "react";
import img1 from "/assets/images/category/apple.png";

const ProductInfo = () => {
  return (
    <div>
      <div className="bg-gray-100 0 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Image Section */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={img1}
                  alt="Product"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-pink-500  text-white py-2 px-4 rounded-full font-bold hover:bg-pink-800 ">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h2>
              <p className="text-gray-600  text-sm mb-4">
              Quality products at great prices
                Rigorous refurbishment process prior to sale
                Covered by Apple’s one-year limited warrantyThis will open a new window.
                Covered by Apple’s 14-day returns policyThis will open a new window.
                AppleCareThis will open a new window. product can be purchased
                Engraving and gift wrap not available for refurbished products
                Supplies are limited
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Price:
                  </span>
                  <span className="text-gray-600 ">
                    LKR 5555
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800  mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500  mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500  mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500  mr-2"></button>
                </div>
              </div>

              {/* Size Selection */}
              {/* <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 "
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Product Description */}
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                S7 with 64-bit dual-core processor
                </p>
                <p className="text-gray-600  text-sm mt-2">
                Electrical heart sensor (ECG app)¹
                </p>
                <p className="text-gray-600  text-sm mt-2">
                Water resistant to 50 metres²
                </p>
                <p className="text-gray-600  text-sm mt-2">
                Always-On Retina LTPO OLED display (1,000 nits brightness)
                </p>
                <p className="text-gray-600  text-sm mt-2">
                802.11b/g/n 2.4GHz and 5GHz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
