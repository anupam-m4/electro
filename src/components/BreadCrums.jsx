import React from "react";
import { useNavigate } from "react-router-dom";

const BreadCrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className=" max-w-6xl mx-auto my-10">
      <h1 className=" text-xl text-gray-500 font-semibold">
        <span className=" cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>
        /
        <span className=" cursor-pointer" onClick={() => navigate("/products")}>
          Products
        </span>
        / <span>{title}</span>
      </h1>
      <div className=""></div>
    </div>
  );
};

export default BreadCrums;
