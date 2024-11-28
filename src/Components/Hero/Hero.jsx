import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import img1 from "/assets/images/category/macbook.png";
import img2 from "/assets/images/headphone.png";
import img3 from "/assets/images/category/vr.png";
import img4 from "/assets/images/1.webp";

const HeroSection = () => {
  return (
    <div className="bg-pink-50 dark:bg-gray-800 flex items-center overflow-hidden py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="block w-16 h-2 bg-gray-800 dark:bg-white mb-4 mx-auto md:mx-0"></span>
          <h1 className="font-bebas-neue uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight dark:text-white text-gray-800">
          Experience
            <motion.span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              the Future
            </motion.span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-4">
          Discover the ultimate performance and sleek design in our latest products.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content with Swiper */}
        <motion.div
          className="w-full md:w-1/2 lg:w-3/5 relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto"
          >
            <SwiperSlide>
              <img
                src={img4}
                alt="Iphone"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img1}
                alt="MacBook"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="Headphone"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="VR"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
