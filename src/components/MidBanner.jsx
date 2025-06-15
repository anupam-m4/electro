import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaBoxOpen, FaCartPlus, FaLock } from "react-icons/fa";
import Bubbles from "./Bubbles";
import MidbannerFirstSlide from "./MidbannerFirstSlide";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AnimatedHeading = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="text-4xl md:text-5xl font-bold text-center uppercase text-white"
    >
      {children}
    </motion.h2>
  );
};

const MidBanner = () => {
  return (
    <div className="w-full">
      {/* Section 1 */}
      {/* <section className="h-[95vh] bg-gradient-to-r from-amber-600 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Discover The Best Shopping Experience
          </h1>
          <p className="text-lg max-w-2xl">
            We bring you the smoothest, fastest, and most enjoyable way to shop
            online. Unmatched quality, unbeatable support.
          </p>
        </motion.div>
      </section> */}

      <MidbannerFirstSlide />
      {/* Section 2: Sticky Video */}
      <Bubbles />

      {/* Section 3: Features */}
      <section className="md:h-[70vh] h-[100vh] bg-gray-100 flex flex-col items-center justify-center text-center px-4">
        <AnimatedHeading>
          <h2 className="text-2xl sm:text-2xl md:text-5xl font-semibold text-gray-900 text-center mt-0">
            Easy, Fast, & Secure
          </h2>
        </AnimatedHeading>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {[
            {
              icon: <FaBoxOpen size={40} className="text-red-500 mx-auto" />,
              title: "Browse Products",
              desc: "Explore a wide range of high-quality items with detailed information.",
            },
            {
              icon: <FaCartPlus size={40} className="text-green-500 mx-auto" />,
              title: "Add to Cart",
              desc: "Effortlessly add your favorites to the cart with a single click.",
            },
            {
              icon: <FaLock size={40} className="text-blue-500 mx-auto" />,
              title: "Secure Checkout",
              desc: "Experience peace of mind with our encrypted, safe payment process.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="p-6 bg-white rounded-xl shadow-xl"
              variants={fadeInUp}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>
          {/* "linear-gradient(270deg, #0A0A1A, #1A1A3B, #0F0F2A, #0A0A1A)", */}

    </div>
  );
};

export default MidBanner;
