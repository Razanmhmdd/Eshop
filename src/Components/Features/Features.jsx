
import React from "react";
import { FaShippingFast, FaMoneyCheckAlt, FaLock, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast size={40} color="#ec4899" />,
      title: "Free Shipping",
      description: "Free Shipping On All Orders",
    },
    {
      icon: <FaMoneyCheckAlt size={40} color="#ec4899" />,
      title: "Safe Money",
      description: "30 Days Money Back",
    },
    {
      icon: <FaLock size={40} color="#ec4899" />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      icon: <FaHeadset size={40} color="#ec4899" />,
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center "
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
