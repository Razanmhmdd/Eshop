import React from 'react';
import img1 from "/assets/images/blogs/blog-1.jpg";
import img2 from "/assets/images/blogs/g.jpg";
import img3 from "/assets/images/blogs/blog-3.jpg";


const RecentNews = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Grid Container */}
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">Recent News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="rounded overflow-hidden flex flex-col">
          <a href="#">
            <img
              className="w-full"
              src={img1}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-pink-100 m-10">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
            >
              How to choose perfect smartwatch

              </a>
            <p className="text-gray-500 text-sm">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?
</p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out ml-1"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>

        {/* Duplicate Cards */}
        <div className="rounded overflow-hidden flex flex-col">
          <a href="#">
            <img
              className="w-full"
              src={img2}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-pink-100 m-10">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
            >
            How to choose perfect gadget
            </a>
            <p className="text-gray-500 text-sm">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?

            </p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out ml-1"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded overflow-hidden flex flex-col">
          <a href="#">
            <img
              className="w-full"
              src={img3}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-pink-100 m-10">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
            >
            How to choose perfect VR headset

            </a>
            <p className="text-gray-500 text-sm">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?
</p>
            <p className="mt-5 text-gray-600 text-xs">
              By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out ml-1"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
