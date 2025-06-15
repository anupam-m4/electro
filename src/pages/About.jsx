

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0F0F2A] to-[#0A0A1A] py-16 px-4 sm:px-6 lg:px-20 text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10 border border-gray-700/50 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-amber-300 drop-shadow-md">
          About <span className="text-blue-400">Electro</span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-blue-400">Electro</span>
          , your ultimate destination for cutting-edge electronics. We're
          dedicated to empowering your tech journey with premium products and
          unparalleled service, making innovation accessible to everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-x-16">
          {/* Our Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-300 flex items-center gap-2">
              <span className="text-blue-400 text-3xl transform -rotate-12">
                🚀
              </span>{" "}
              Our Mission
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              At Electro, we believe in democratizing technology. Our mission is
              to seamlessly connect individuals with the advanced tools they
              need to thrive in an ever-evolving digital landscape. We achieve
              this by offering competitive prices, rapid delivery, and
              unwavering support.
            </p>
          </div>

          {/* Why Choose Electro? */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-300 flex items-center gap-2">
              <span className="text-blue-400 text-3xl">✨</span> Why Choose
              Electro?
            </h2>
            <ul className="list-none space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span> Top-tier
                electronic products from globally recognized brands.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span> Blazing-fast
                and secure shipping, getting your tech to you swiftly.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span> Dedicated
                customer support, always ready to assist your queries.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span> A hassle-free
                shopping experience with easy returns and exchanges.
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div className="space-y-4 md:col-span-2">
            {" "}
            {/* Span full width on md screens */}
            <h2 className="text-3xl font-bold text-amber-300 flex items-center gap-2">
              <span className="text-blue-400 text-4xl">💡</span> Our Vision
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              We envision a world where cutting-edge technology effortlessly
              enhances daily life. Electro is committed to pioneering the future
              of electronics retail, consistently offering innovative,
              practical, and affordable solutions that keep you ahead of the
              curve.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 pt-6 border-t border-gray-700/50">
          <h3 className="text-3xl font-bold text-amber-300 mb-4">
            Join the Electro-Family
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned tech enthusiast, a professional seeking
            reliable tools, or simply looking for something new and functional,
            Electro offers an unparalleled selection tailored for everyone.
          </p>
          <Link to={"/products"}>
            <button
              className="
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white px-10 py-4 rounded-full text-xl font-bold
              shadow-xl cursor-pointer
              hover:from-blue-700 hover:to-purple-700 transition duration-300
              transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
            "
            >
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
