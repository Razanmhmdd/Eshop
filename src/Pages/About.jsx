import React from 'react'
import img from "/assets/images/s.webp";

const About = () => {
  return (
    <>
    <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={img}
              alt="Sri Lankan Authentic Food"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[400px] border-pink-600 border-2"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4">
            About Us
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Warm Greetings, <br />
              AVI Store offered safety and basic use training on all of its tools and equipment in addition to advanced and special interest classes and workshops. For most equipment, a safety and use class had to be completed before it could be used. It was affiliated with the maker culture and participated in annual Maker Faire events.
            </p>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-4">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">+94776059293</a> <br />
              {/* <a href="tel:+94771181803" className="hover:underline">+94771181803</a> */}
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Yours Sincerely, <br />
              <span className="font-semibold text-gray-800">AVI Store</span> </p>
             
      
          </div>
        </div>
      </section>
      </>
  )
}

export default About