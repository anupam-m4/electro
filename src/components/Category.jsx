// import React, { useContext } from "react";
// import { DataContext, getData } from "../context/DataContext";
// import { useNavigate } from "react-router-dom";

// const Category = () => {
//   const navigate = useNavigate();
//   const { data } = getData();

//   const getUniqueCategory = (data, property) => {
//     let newVal = data?.map((elem) => {
//       return elem[property];
//     });
//     newVal = [...new Set(newVal)];
//     return newVal;
//   };
//   const categoryOnlyData = getUniqueCategory(data, "category");

//   return (
//     <div className=" bg-gradient-to-r from-[#0A0A1A] via-[#1A1A3B] to-[#0F0F2A]">
//       <div className=" max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
//         {categoryOnlyData.map((elem, idx) => {
//           return (
//             <div key={idx}>
//               <button
//                 onClick={() => navigate(`/category/${elem}`)}
//                 className=" bg-gradient-to-r from-amber-300 to-purple-500 cursor-pointer  py-2 px-5 rounded-md font-semibold capitalize border-none text-black "
//               >
//                 {elem}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useContext } from "react";
import { DataContext, getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((elem) => {
      return elem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    // Outer container with a richer, darker background and increased padding
    <div className="bg-gradient-to-r from-[#050510] via-[#0F0F2A] to-[#0A0A1A] py-16 px-4 md:px-0">
      {/* New section title for clear hierarchy */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
        Explore <span className="text-amber-300">Categories</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 items-center justify-center">
        {" "}
        {/* Adjusted gap */}
        {categoryOnlyData.map((elem, idx) => {
          return (
            <div key={idx} className="group relative">
              {" "}
              {/* Group for hover effects */}
              <button
                onClick={() => navigate(`/category/${elem}`)}
                className="
                  relative z-10
                  px-8 py-3 rounded-full cursor-pointer
                  font-semibold capitalize text-lg text-white
                  bg-gray-800 border border-gray-700 /* Dark, subtle base for buttons */
                  shadow-lg
                  transition-all duration-300 ease-in-out
                  transform-gpu
                  hover:scale-105 hover:bg-gray-700 hover:border-blue-500 /* Base hover effects */
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75

                  before:absolute before:inset-0 before:rounded-full
                  before:transition-all before:duration-300 before:ease-in-out
                  before:opacity-0 before:blur-sm before:bg-gradient-to-br from-blue-500 to-purple-600
                  group-hover:before:opacity-100 group-hover:before:blur-md
                  group-focus-visible:before:opacity-100 group-focus-visible:before:blur-md
                "
              >
                <span className="relative z-10">{elem}</span>{" "}
                {/* Wrap text to ensure it sits above the pseudo-element glow */}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
