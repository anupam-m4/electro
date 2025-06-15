import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();

  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer shadow-2xl transition-all h-max p-2">
      <img
        src={data.image}
        alt=""
        className=" bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${data.id}`)}
      />
      <h1 className=" line-clamp-2 p-1 font-semibold">{data.title}</h1>
      <p className=" my-1 ml-1 text-lg text-gray-700 font-bold">
        Rs.{data.price}.00
      </p>
      <button
        onClick={() => addToCart(data)}
        className="bg-gradient-to-r to-amber-300 from-purple-500 text-white px-2 py-2 text-md md:text-lg w-full rounded-md 
  cursor-pointer flex gap-2 items-center justify-center font-semibold whitespace-nowrap"
      >
        <IoCartOutline className=" w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
