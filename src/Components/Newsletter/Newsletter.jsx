import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md bg-pink-400 mb-8 mt-8">
        {/* Heading */}
        <h2 className="mb-6 text-center text-2xl font-bold text-white md:mb-0 lg:mb-0 lg:text-left md:text-3xl lg:text-4xl xl:text-5xl">
          Get 25% discount on your next purchase
        </h2>

        {/* Form */}
        <form
          name="email-form"
          method="get"
          className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row lg:justify-end"
        >
          {/* Email Input */}
          <input
            type="email"
            className="h-10 w-full bg-white px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none sm:flex-1"
            placeholder="Enter your email"
            required
          />

          {/* Submit Button */}
          <input
            type="submit"
            value="Subscribe"
            className="w-full cursor-pointer rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-pink-600 transition-all duration-300 shadow-md hover:bg-pink-500 hover:text-white hover:shadow-lg sm:w-auto"
          />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
