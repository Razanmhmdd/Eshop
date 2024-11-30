// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// // import "swiper/swiper-bundle.min.css"; // Ensure this is uncommented

// const Product = () => {
//   const products = {
//     laptops: [
//       { id: 1, name: "Laptop 1", image: "/assets/images/brand/1.jpg", price: "$999" },
//       { id: 2, name: "Laptop 2", image: "/assets/images/brand/1.jpg", price: "$1099" },
//       { id: 3, name: "Laptop 3", image: "/assets/images/brand/1.jpg", price: "$1199" },
//     ],
//     mobiles: [
//       { id: 1, name: "Mobile 1", image: "/assets/images/brand/2.jpg", price: "$499" },
//       { id: 2, name: "Mobile 2", image: "/assets/images/brand/2.jpg", price: "$599" },
//       { id: 3, name: "Mobile 3", image: "/assets/images/brand/2.jpg", price: "$699" },
//     ],
//     tvs: [
//       { id: 1, name: "TV 1", image: "/assets/images/brand/3.jpg", price: "$1299" },
//       { id: 2, name: "TV 2", image: "/assets/images/brand/3.jpg", price: "$1499" },
//       { id: 3, name: "TV 3", image: "/assets/images/brand/3.jpg", price: "$1699" },
//     ],
//   };

//   return (
//     <div className="p-4">
//       {/* Laptops Section */}
//       <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Laptops</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 }, // Mobile
//           768: { slidesPerView: 2 }, // Tablet
//           1024: { slidesPerView: 3 }, // Desktop
//         }}
//         className="mb-8"
//       >
//         {products.laptops.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="p-4 bg-pink-100 shadow-md rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//               />
//               <h3 className="font-semibold text-lg">{product.name}</h3>
//               <p className="text-gray-500">{product.price}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Mobiles Section */}
//       <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Mobiles</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="mb-8"
//       >
//         {products.mobiles.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="p-4 bg-pink-100 shadow-md rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//               />
//               <h3 className="font-semibold text-lg">{product.name}</h3>
//               <p className="text-gray-500">{product.price}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* TVs Section */}
//       <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">LED TV</h2>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {products.tvs.map((product) => (
//           <SwiperSlide key={product.id}>
//             <div className="p-4 bg-pink-100 shadow-md rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//               />
//               <h3 className="font-semibold text-lg">{product.name}</h3>
//               <p className="text-gray-500">{product.price}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Product;
import React from "react";
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
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 4 ,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
    {
      id: 4,
      name: "Dahua CCTV Kit",
      image: "/assets/images/brand/1.jpg",
      price: "Rs. 40,000.00",
      salePrice: "Rs. 45,000.00",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Search and Filters Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="w-full lg:w-1/4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button className="bg-pink-500 text-white py-2 px-4 rounded-xl mt-2 w-full">
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
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
                Cameras & Audio
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
                Laptops
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
               Mobilephones
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
               Tablets
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
                Gadjets
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
                Cameras & Audio
              </label>
            </li>
            <li>
              <input type="checkbox" id="cameras" />
              <label htmlFor="cameras" className="ml-2">
                Cameras & Audio
              </label>
            </li>
            {/* Add more categories */}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-6 text-pink-500">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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
                <CgDetailsMore className="text-2xl text-pink-600"/>
                
                {/* Add to Cart Button */}
                <button className="absolute bottom-36 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
