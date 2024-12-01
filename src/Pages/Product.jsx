import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CgDetailsMore } from "react-icons/cg";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch 6",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 47,000.00",
    },
    {
      id: 2,
      name: "Dahua 2MP Full-Color Camera",
      image: "/assets/images/brand/2.jpg",
      price: "Rs. 10,777.00",
      salePrice: "Rs. 12,000.00",
    },
    {
      id: 3,
      name: "Dahua 2MP HDCVI IR Camera",
      image: "/assets/images/brand/3.jpg",
      price: "Rs. 10,999.00",
      salePrice: "Rs. 12,500.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 3,
      name: "Dahua 2MP HDCVI IR Camera",
      image: "/assets/images/brand/3.jpg",
      price: "Rs. 10,999.00",
      salePrice: "Rs. 12,500.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 3,
      name: "Dahua 2MP HDCVI IR Camera",
      image: "/assets/images/brand/3.jpg",
      price: "Rs. 10,999.00",
      salePrice: "Rs. 12,500.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    // Add more products as needed
  ];

  const itemsPerPage = 6; // Items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination details
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Search and Filters Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="w-full lg:w-1/4">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button className="bg-pink-500 text-white py-2 px-4 rounded-lg mt-2 w-full">
              Search
            </button>
          </div>

          {/* Categories */}
          <h3 className="font-semibold text-lg mb-2">Category</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <input type="checkbox" id="accessories" />
              <label htmlFor="accessories" className="ml-2">
                Accessories
              </label>
            </li>
            {/* Add more categories */}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="relative group p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200"
              >
                {product.salePrice && (
                  <span className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full top-2 right-2">
                    Sale!
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-semibold text-lg mt-4">{product.name}</h3>
                {product.salePrice ? (
                  <p className="text-red-500 font-bold mt-2">
                    {product.price}{" "}
                    <span className="line-through text-gray-500 text-sm">
                      {product.salePrice}
                    </span>
                  </p>
                ) : (
                  <p className="text-gray-800 font-bold mt-2">{product.price}</p>
                )}
                <CgDetailsMore className="text-2xl text-pink-600 mt-2" />

                {/* Add to Cart Button */}
                <button className="absolute bottom-36 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-pink-400 hover:text-white"
                } transition-all duration-300`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
