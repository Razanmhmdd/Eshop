import React, { useState } from "react";
import img1 from "/assets/images/product/11.jpg";
import img2 from "/assets/images/product/12.jpg";
import img3 from "/assets/images/product/13.jpg";
import img4 from "/assets/images/product/14.jpg";
import img5 from "/assets/images/product/a55.jpg";
import img6 from "/assets/images/product/s20.jpg";
import img7 from "/assets/images/1.webp";

const CardGridView = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cards = [
    { id: 1, image: img7, title: "Iphone 11", link: "/buy/iphone-11" },
    { id: 2, image: img2, title: "Samsung Galaxy A12", link: "/buy/samsung-a12" },
    { id: 3, image: img3, title: "Google Pixel 4", link: "/buy/google-pixel4" },
    { id: 4, image: img4, title: "OnePlus 8", link: "/buy/oneplus-8" },
    { id: 5, image: img5, title: "Sony Xperia Z5", link: "/buy/sony-xz5" },
    { id: 6, image: img6, title: "Huawei S20", link: "/buy/huawei-s20" },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/assets/image/img1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Latest Mobiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-pink-50 border border-pink-500 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-72 h-72 object-cover cursor-pointer items-center"
                onClick={() => setSelectedImage(card.image)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {card.title}
                </h3>
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                  onClick={() => (window.location.href = card.link)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Size Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CardGridView;
