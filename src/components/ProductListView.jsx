import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const deliveryMessages = [
    "Free delivery in 2-3 days",
    "Free delivery in 4 days",
    "Free delivery by tomorrow",
  ];

  const randomDeliveryMessage =
    deliveryMessages[Math.floor(Math.random() * deliveryMessages.length)];

  return (
    <div className=" space-y-4 mt-4 rounded-md">
      <div className=" bg-gray-100 flex gap-7 items-center p-2 rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className=" md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer "
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className=" space-y-2 ">
          <h1 className=" font-bold text-lg md:text-xl line-clamp-3 hover:text-red-500 md:w-full w-[220px]">
            {" "}
            {product.title}
          </h1>
          {/* <p className=" font-semibold flex items-center text-sm md:text-lg">
            Rs. <span className="text-3xl md:text-4xl">{product.price}</span>(
            {product.discount})% off
          </p> */}
          <p className="font-semibold flex items-center gap-1 text-sm md:text-lg">
            Rs. <span className="text-3xl md:text-4xl">{product.price}</span>
            {product.discount > 0 && <> ({product.discount}%) off</>}
          </p>
          <p className=" text-red-500 md:text-md text-sm">
            {/* Free delivery in 2-3 days */}
            {randomDeliveryMessage}
            {/* <CiDeliveryTruck />  */}
          </p>{" "}
          <br />
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer px-3 py-1.5 text-lg bg-red-500 text-white rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
