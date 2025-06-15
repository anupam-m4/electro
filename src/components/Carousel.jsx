// import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { DataContext, getData } from "../context/DataContext";
import TaglineRotator from "../components/TaglineRotator";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TiltImg from "./TiltImg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = ({ item }) => {
  const { data, fetchAllProducts } = getData();
  // console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            // background: "white",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
        />
      </div>
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            // background: "#f53347",/
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
          //   onMouseOver="this.style.background='#555"
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="
               bg-gradient-to-r from-[#0A0A1A] via-[#1A1A3B] to-[#0F0F2A]
               -z-10"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4">
                <div className="md:space-y-6 space-y-4">
                  <TaglineRotator />

                  <h1 className="md:text-4xl text-2xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button
                    onClick={() => navigate("/products")}
                    className="bg-gradient-to-r to-amber-300 from-purple-500 text-white px-5 py-3 rounded-md cursor-pointer mt-2"
                  >
                    Shop Now
                  </button>
                </div>
                <div>
                  <TiltImg src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
