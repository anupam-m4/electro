import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  // console.log(category);
  const navigate = useNavigate();

  const fetchDataByCategory = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      console.log(data);
      setSearchData(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchDataByCategory();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="">
        {searchData.length > 0 ? (
          <div className=" max-w-6xl mx-auto mt-10 mb-10 px-4">
            <button
              onClick={() => navigate("/")}
              className=" bg-gray-800 text-white mb-5 px-3 py-1 rounded-md cursor-pointer flex gap-1"
            >
              <ChevronLeft /> Back
            </button>

            {searchData.map((product, idx) => {
              return <ProductListView key={idx} product={product} />;
            })}
          </div>
        ) : (
          <div className=" flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
