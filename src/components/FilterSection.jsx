// import React from "react";
// import { getData } from "../context/DataContext";

// const FilterSection = ({
//   search,
//   setSearch,
//   brand,
//   setBrand,
//   priceRange,
//   setPriceRange,
//   category,
//   setCategory,
//   handleCategoryChange,
//   handleBrandChange,
// }) => {
//   const { categoryOnlyData, brandOnlyData } = getData();
//   return (
//     <div className=" bg-gray-100 p-4 rounded-md h-max mt-10 hidden md:block">
//       <input
//         placeholder="search items.."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className=" bg-white p-2 rounded-md border-gray-400 border-2"
//       />{" "}
//       {/* category */}
//       <h1 className=" mt-5 font-semibold text-xl">Category</h1>
//       <div className=" flex flex-col gap-2 mt-3">
//         {categoryOnlyData.map((item, idx) => {
//           return (
//             <div key={idx} className=" flex gap-2">
//               <input
//                 type="checkbox"
//                 className=" cursor-pointer"
//                 name={item}
//                 value={item}
//                 checked={category === item}
//                 onChange={handleCategoryChange}
//               />
//               <button className=" cursor-pointer">{item.toUpperCase()}</button>
//             </div>
//           );
//         })}
//       </div>
//       {/* brand */}
//       <h1 className=" mt-5 font-semibold text-xl mb-3">Brand</h1>
//       <select
//         className=" bg-white w-full p-2 border-gray-200 border-2 rounded-md"
//         value={brand}
//         onChange={handleBrandChange}
//       >
//         {brandOnlyData?.map((item, idx) => {
//           return (
//             <option key={idx} value={item}>
//               {item}
//             </option>
//           );
//         })}
//       </select>
//       {/* price */}
//       <h1 className=" mt-5 font-semibold text-xl mb-3">Select range</h1>
//       <div className=" flex gap-2 flex-col">
//         <label htmlFor="">
//           {/* Price Range: Rs.{priceRange[0]} - Rs.{priceRange[1]} */}
//           Price Range: Rs.{priceRange?.[0] ?? 0} - Rs.{priceRange?.[1] ?? 0}
//         </label>

//         <input
//           type="range"
//           min="0"
//           max="2000"
//           value={priceRange[1]}
//           onChange={(e) =>
//             setPriceRange([priceRange[0], Number(e.target.value)])
//           }
//         />
//       </div>
      
//       <button
//         onClick={() => {
//           setSearch("");
//           setCategory("All");
//           setBrand("All");
//           setPriceRange([0, 2000]);
//         }}
//         className=" bg-red-500 text-white px-3 rounded-md py-1 cursor-pointer mt-2"
//       >
//         Reset Filter
//       </button>
//     </div>
//   );
// };

// export default FilterSection;


import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
  handleBrandChange,
}) => {
  const { categoryOnlyData = [], brandOnlyData = [] } = getData();

  // FIX 1: Ensures 'All' appears only once in Categories
  const uniqueRawCategories = categoryOnlyData
    .filter((cat) => typeof cat === "string" && cat.trim() !== "")
    .map((cat) => cat.trim())
    .filter((cat) => cat.toLowerCase() !== "all");

  const safeCategories = [
    "All", // Manually insert 'All' at the start
    ...new Set(uniqueRawCategories),
  ];

  // FIX 2: Ensures 'All' appears only once in Brands
  const uniqueRawBrands = brandOnlyData
    .filter((br) => typeof br === "string" && br.trim() !== "")
    .map((br) => br.trim())
    .filter((br) => br.toLowerCase() !== "all");

  const safeBrands = [
    "All", // Manually insert 'All' at the start
    ...new Set(uniqueRawBrands), // Spread the unique, cleaned brands
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-md h-max mt-10 hidden md:block">
      {/* 🔍 Search */}
      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
      />

      {/* 🧩 Category */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {safeCategories.map((item, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="cursor-pointer"
              name={item}
              value={item}
              checked={category === item}
              onChange={handleCategoryChange}
            />
            <button className="cursor-pointer">
              {item?.toUpperCase?.() ?? ""}
            </button>
          </div>
        ))}
      </div>

      {/* 🏷 Brand */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
      <select
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
        value={brand}
        onChange={handleBrandChange}
      >
        {safeBrands.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* 💰 Price Range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Select Range</h1>
      <div className="flex gap-2 flex-col">
        <label>
          Price Range: Rs.{priceRange?.[0] ?? 0} - Rs.{priceRange?.[1] ?? 0}
        </label>
        <input
          type="range"
          min="0"
          max="200000"
          value={priceRange?.[1] ?? 0}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      {/* ♻ Reset Button */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setPriceRange([0, 200000]);
        }}
        className="bg-red-500 text-white px-3 rounded-md py-1 cursor-pointer mt-3"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterSection;