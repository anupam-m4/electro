import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../assets/Loading4.webm";
import BreadCrums from "../components/BreadCrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  //   console.log(params);
  const { addToCart } = useCart();
  const [singleProduct, setSingleProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      //   console.log(res);
      let product = res.data.product;
      setSingleProduct(product);
      //   console.log(product);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const price = Number(singleProduct?.price);
  const discount = Number(singleProduct?.discount);

  // Calculate only if both price and discount are valid
  const originalPrice =
    !isNaN(price) && !isNaN(discount) && discount > 0
      ? Math.round(price + (price * discount) / 100)
      : null;

  return (
    <>
      {singleProduct ? (
        <div className=" px-4 pb-4 md:px-0 ">
          <BreadCrums title={singleProduct.title} />
          <div
            className=" max-w-6xl mx-auto md:p-6 grid sm:grid-cols-1 md:grid-cols-2 gap-10
            "
          >
            {/* prod img */}
            <div className=" w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className=" rounded-2xl w-full
               object-cover"
              />
            </div>
            {/* prod details */}
            <div className=" flex flex-col gap-6 ">
              <h1 className=" md:text-3xl text-xl font-bold text-gray-700">
                {singleProduct.title}
              </h1>
              <div className=" text-gray-600">
                {singleProduct.brand?.toUpperCase()}/{" "}
                {singleProduct.category.toUpperCase()}/{singleProduct.model}
              </div>

              {discount > 0 ? (
                <p className="text-xl flex items-center gap-2 text-red-600 font-bold">
                  Rs.{price}
                  <span className="line-through text-gray-700">
                    Rs.{originalPrice}
                  </span>
                  <span className="bg-red-500 text-white px-4 py-1 rounded-md">
                    {discount}% off
                  </span>
                </p>
              ) : (
                <p className="text-xl flex items-center gap-2 text-red-600 font-bold">
                  Rs.{price}
                  <span className="bg-gray-200 text-red-400 px-3 py-1 rounded-md ml-2 cursor-default">
                    No Discount
                  </span>
                </p>
              )}

              <p className=" text-gray-600">{singleProduct.description}</p>
              {/* quantity */}
              <div className=" flex items-center gap-4 ">
                <label className=" text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="w-20 border border-gray-300 rounded-lg py-1 px-3 focus:outline-none text-center"
                />
              </div>
              <div className=" flex gap-4 mt-4">
                <button
                  // onClick={() => addToCart(singleProduct)}
                  onClick={() => addToCart({ ...singleProduct, quantity })}
                  className="cursor-pointer px-3 py-2 flex items-center gap-2 text-lg bg-red-500 text-white rounded-md"
                >
                  <IoCartOutline className="w-6 h-6" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
