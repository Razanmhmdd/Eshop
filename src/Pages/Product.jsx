import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/swiper-bundle.min.css"; // Ensure this is uncommented

const Product = () => {
  const products = {
    laptops: [
      { id: 1, name: "Laptop 1", image: "/assets/images/brand/1.jpg", price: "$999" },
      { id: 2, name: "Laptop 2", image: "/assets/images/brand/1.jpg", price: "$1099" },
      { id: 3, name: "Laptop 3", image: "/assets/images/brand/1.jpg", price: "$1199" },
    ],
    mobiles: [
      { id: 1, name: "Mobile 1", image: "/assets/images/brand/2.jpg", price: "$499" },
      { id: 2, name: "Mobile 2", image: "/assets/images/brand/2.jpg", price: "$599" },
      { id: 3, name: "Mobile 3", image: "/assets/images/brand/2.jpg", price: "$699" },
    ],
    tvs: [
      { id: 1, name: "TV 1", image: "/assets/images/brand/3.jpg", price: "$1299" },
      { id: 2, name: "TV 2", image: "/assets/images/brand/3.jpg", price: "$1499" },
      { id: 3, name: "TV 3", image: "/assets/images/brand/3.jpg", price: "$1699" },
    ],
  };

  return (
    <div className="p-4">
      {/* Laptops Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Laptops</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
        className="mb-8"
      >
        {products.laptops.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-pink-100 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobiles Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Mobiles</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-8"
      >
        {products.mobiles.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-pink-100 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TVs Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">LED TV</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.tvs.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-pink-100 shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
