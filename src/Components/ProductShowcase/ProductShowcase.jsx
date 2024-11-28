// import React from "react";

// const ProductShowcase = () => {
//   // Product data
//   const products = [
//     {
//       title: "iPhone 12 Pro",
//       description: "Blast Past Fast. It's a Leap Year.",
//       image: "/assets/images/1.webp",
//       bgColor: "bg-gray-900",
//       buttonColor: "bg-green-500",
//     },
//     {
//       title: "DJI Mavic Mini",
//       description: "Stay Connected. Stay Creative.",
//       image: "/assets/images/dj.png",
//       bgColor: "bg-gray-800",
//       buttonColor: "bg-yellow-500",
//     },
//     {
//       title: "Wear Gadgets",
//       description: "Stay Creative with Innovative Wearables.",
//       image: "/assets/images/wa.png",
//       bgColor: "bg-red-600",
//       buttonColor: "bg-black",
//     },
//     {
//       title: "ASUS Laptop",
//       description: "Top-Notch Performance",
//       image: "/assets/images/lap.png",
//       bgColor: "bg-gray-700",
//       buttonColor: "bg-blue-500",
//     },
//     {
//       title: "Samsung s23 Ultra",
//       description: "Noise Cancelling & Dynamic Sound",
//       image: "/assets/images/s23.webp",
//       bgColor: "bg-blue-900",
//       buttonColor: "bg-purple-500",
//     },
//     {
//       title: "Apple I-pad",
//       description: "Elegant And Slim",
//       image: "/assets/images/ipa.png",
//       bgColor: "bg-gray-800",
//       buttonColor: "bg-yellow-500",
//     },
//   ];

//   return (
//     <div className="bg-gray-800 text-white py-12 px-6">
//       {/* Header */}
//       <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
//         Explore Our Products
//       </h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${product.bgColor}`}
//           >
//             {/* Title */}
//             <h3 className="text-lg font-bold uppercase mb-2">
//               {product.title}
//             </h3>

//             {/* Description */}
//             <p className="text-sm mb-4">{product.description}</p>

//             {/* Image */}
//             <div className="w-full h-48 mb-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-110"
//               />
//             </div>

//             {/* Button */}
//             <button
//               className={`py-2 px-4 font-semibold rounded-lg ${product.buttonColor} hover:opacity-90 transition duration-300`}
//             >
//               Shop By Category
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;
import React from "react";
import img1 from "/assets/images/product/11.jpg";
import img2 from "/assets/images/product/12.jpg";
import img3 from "/assets/images/product/13.jpg";
import img4 from "/assets/images/product/14.jpg";
import img5 from "/assets/images/product/a55.jpg";
import img6 from "/assets/images/product/s20.jpg";
import img7 from "/assets/images/product/s24.jpg";
import img8 from "/assets/images/product/a05.jpg";


export default function ProductShowcase() {
  // Array of images
  const images = [img1, img2, img3, img4, img5, img6, img7,img8];

  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto px-8 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">
          Latest Mobiles
        </h2>
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card */}
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
            >
              {/* Image */}
              <figure>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="aspect-video w-full"
                />
              </figure>
              {/* Body */}
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">
                    Iphone {index + 1}
                  </h3>
                  <p className="text-slate-400">$8.99</p>
                </header>
                <p>
                  #apple, #ios, #BrandNew
                </p>
              </div>
              {/* Action Button */}
              <div className="flex justify-end p-6 pt-0">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-rose-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-rose-600 focus:bg-rose-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-rose-300 disabled:bg-rose-300 disabled:shadow-none">
                  <span>Buy now!</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
