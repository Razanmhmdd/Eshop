import React from "react";

const banners = [
  {
    id: 1,
    title: "Earphone",
    subtitle: "Enjoy With",
    color: "bg-gray-800",
    textColor: "text-white",
    image: "/assets/images/category/earphone.png", // Replace with the correct path
  },
  {
    id: 2,
    title: "Gadget",
    subtitle: "Enjoy With",
    color: "bg-yellow-400",
    textColor: "text-gray-900",
    image: "/assets/images/category/speaker.png", // Replace with the correct path
  },
  {
    id: 3,
    title: "Laptop",
    subtitle: "Enjoy With",
    color: "bg-red-500",
    textColor: "text-white",
    image: "/assets/images/category/macbook.png", // Replace with the correct path
  },
  {
    id: 4,
    title: "Gaming",
    subtitle: "Enjoy With",
    color: "bg-gray-300",
    textColor: "text-gray-800",
    image: "/assets/images/category/gaming.png", // Replace with the correct path
  },
  {
    id: 5,
    title: "VR",
    subtitle: "Enjoy With",
    color: "bg-green-500",
    textColor: "text-white",
    image: "/assets/images/category/vr.png", // Replace with the correct path
  },
  {
    id: 6,
    title: "Smart watch",
    subtitle: "Enjoy With",
    color: "bg-blue-500",
    textColor: "text-white",
    image: "/assets/images/category/WA.png", // Replace with the correct path
  },
];

const BannerGrid = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`${banner.color} ${banner.textColor} rounded-lg p-6 flex flex-col justify-between items-start shadow-lg relative`}
          >
            {/* Text Content */}
            <div>
              <p className="text-sm uppercase">{banner.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl font-bold">{banner.title}</h2>
            </div>
            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-white text-red-500 font-semibold rounded-full hover:bg-gray-100">
              Browse
            </button>
            {/* Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute right-4 bottom-4 w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;
