import React from "react";
import img1 from "/assets/images/category/apple.png";
import { FaCartPlus } from "react-icons/fa6";

// Product data array
const products = [
  {
    id: 1,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 599,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 2,
    name: "Apple iMac 27, 1TB HDD, Retina 5K Display, M3 Max",
    price: 100,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    price: 599,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 4,
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    price: 100,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 5,
    name: "Microsoft Surface Pro, Copilot+ PC, 13 Inch",
    price: 599,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    price: 599,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 4,
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    price: 100,
    rating: 5,
    imgSrc: img1,
  },
  {
    id: 5,
    name: "Microsoft Surface Pro, Copilot+ PC, 13 Inch",
    price: 599,
    rating: 5,
    imgSrc: img1,
  },
];

// Individual product card component
const ProductCard = ({ product }) => (
  <div className="bg-slate-50 rounded-lg shadow-md ">
    <img
      className="rounded-t-lg w-full"
      src={product.imgSrc}
      alt={product.name}
      loading="lazy"
    />
    <div className="p-4">
      <h5 className="text-sm font-semibold tracking-tight text-gray-900 ">
        {product.name}
      </h5>
      <div className="my-3 flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${
              index < product.rating ? "text-yellow-300" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-3 text-xs font-semibold text-cyan-800 ">
          {product.rating}.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 ">
          Rs.{product.price}
        </span>
        <a
  href="/info"
  className="flex items-center justify-center rounded-lg bg-pink-500 px-3 py-2 text-center text-xs font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300   md:text-sm"
>
  <FaCartPlus className="text-lg md:text-xl" />
</a>

      </div>
    </div>
  </div>
);

// Main product grid component
const Eproduct = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Eproduct;
