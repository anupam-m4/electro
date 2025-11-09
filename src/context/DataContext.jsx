// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const DataContext = createContext(null);

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   //   fetching from APi

//   const fetchAllProducts = async () => {
//     try {
//       const res = await axios.get(
//         "https://fakestoreapi.in/api/products?limit=150"

//       );
//       // const res = await axios.get("https://fakestoreapi.com/products?limit=150");
//       // console.log(res);
//       const productsData = res.data;
//       // console.log(productsData);
//       // console.log(productsData?.[0].image); // should show image, title, description

//       setData(productsData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getUniqueCategory = (data, property) => {
//     let newVal = data?.map((elem) => {
//       return elem[property];
//     });
//     newVal = ["All", ...new Set(newVal)];
//     return newVal;
//   };

//   const categoryOnlyData = getUniqueCategory(data, "category");
//   const brandOnlyData = getUniqueCategory(data, "brand");

//   return (
//     <DataContext.Provider
//       value={{
//         data,
//         setData,
//         fetchAllProducts,
//         categoryOnlyData,
//         brandOnlyData,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const getData = () => useContext(DataContext);





// ---------------------------------------------


import React, { createContext, useContext, useState } from "react";
import localProducts from "../localProducts"; // ✅ Import local data

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(localProducts); // ✅ Use local products directly

  // Get unique categories or brands
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((elem) => elem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts: () => {}, // empty since no API call
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
