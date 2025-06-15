// import React from "react";
// import { Link } from "react-router-dom";
// // import Logo from '../assets/Logo.png'
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer
//       className="
//                    bg-gradient-to-r from-[#0A0A1A] via-[#1A1A3B] to-[#0F0F2A]

//      text-gray-200
//      py-10"
//     >
//       <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
//         {/*  info */}
//         <div className="mb-6 md:mb-0">
//           <Link to="/">
//             {/* <img src={Logo} alt="" className='w-32'/> */}
//             <h1 className="text-red-500 text-2xl font-bold"> Electro</h1>
//             {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-100 to-red-500  bg-clip-text text-transparent">
//               Electro
//             </h1> */}
//           </Link>
//           <p className="mt-2 text-sm">
//             Powering Your World with the Best in Electronics.
//           </p>
//           <p className="mt-2 text-sm">Odisha, India, 752002</p>
//           <p className="text-sm">Email: anup98padhy@Email.com</p>
//           <p className="text-sm">Phone: (123) 456-789</p>
//         </div>
//         {/* customer service link */}
//         <div className="mb-6 md:mb-0">
//           <h3 className="text-xl font-semibold">Customer Service</h3>
//           <ul className="mt-2 text-sm space-y-2">
//             <li>Contact Us</li>
//             <li>Shipping & Returns</li>
//             <li>FAQs</li>
//             <li>Order Tracking</li>
//             <li>Size Guide</li>
//           </ul>
//         </div>
//         {/* social media links */}
//         <div className="mb-6 md:mb-0">
//           <h3 className="text-xl font-semibold">Follow Us</h3>
//           <div className="flex space-x-4 mt-2">
//             <FaFacebook />
//             <FaInstagram />
//             <FaTwitterSquare />
//           </div>
//         </div>
//         {/* newsletter subscription */}
//         <div>
//           <h3 className="text-xl font-semibold">Stay in the Loop</h3>
//           <p className="mt-2 text-sm">
//             Subscribe to get special offers, free giveaways, and more
//           </p>
//           <form action="" className="mt-4 flex">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-purple-500 to-amber-300 text-white px-4 rounded-r-md "
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* bottom section */}
//       <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
//         <p>
//           &copy; {new Date().getFullYear()}{" "}
//           <span className="text-red-500">Electro</span>. All rights reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa"; // Updated import for the X icon
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-r from-[#0A0A1A] via-[#1A1A3B] to-[#0F0F2A]
        text-gray-300
        py-12 md:py-16
        shadow-inner-2xl
        border-t border-gray-700/50
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <Link to="/">
            <h1 className=" text-3xl font-bold flex gap-0.5 items-center text-white">
              {" "}
              <span className="text-yellow-500 font-serif text-4xl mt-0.5">
                E
              </span>
              lect
              <span className="text-yellow-400 text-2xl -ml-2 mt-1.5">
                <span
                  className="inline-block animate-spin"
                  style={{ animationDuration: "5s" }}
                >
                  ⚡
                </span>
              </span>
              <span className=" -ml-2">o</span>
            </h1>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Powering Your World with the Best in Electronics. Discover
            cutting-edge tech and accessories.
          </p>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Odisha, India, 752002</p>
            <p>Email: anup98padhy@email.com</p>
            <p>Phone: +91 (123) 456-7890</p>
          </div>
        </div>

        {/* Customer Service Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-300">Customer Service</h3>
          <ul className="text-sm space-y-3">
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-returns"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/order-tracking"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Order Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/size-guide"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-300">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            {/* Updated X (formerly Twitter) logo and hover style */}
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-300">Stay in the Loop</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Subscribe to our newsletter for exclusive offers, free giveaways,
            and the latest tech news delivered straight to your inbox.
          </p>
          <form action="#" className="mt-4 flex w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-l-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 rounded-r-lg font-semibold
                         hover:from-blue-700 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-amber-300 font-semibold">Electo</span>. All
          rights reserved.
        </p>
        <p className="mt-2">Designed and Developed by Anup Padhy</p>
      </div>
    </footer>
  );
};

export default Footer;
