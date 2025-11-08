import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  //   fetching from APi

  const fetchAllProducts = async () => {
    try {
      // const res = await axios.get(
      //   "https://fakestoreapi.in/api/products?limit=150"

      // );
      const res = await axios.get("https://fakestoreapi.com/products?limit=150");
      // console.log(res);
      const productsData = res.data;
      // console.log(productsData);
      // console.log(productsData?.[0].image); // should show image, title, description

      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((elem) => {
      return elem[property];
    });
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
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);

// // // -----------------------------------------------------------------------


// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const DataContext = createContext(null);

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(null);

//   // Use useEffect to call the function when the component mounts
//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const fetchAllProducts = async () => {
//     try {
//       // Updated API URL
//       const res = await axios.get(
//         "https://fakestoreapi.com/products?limit=150"
//       );
//       const productsData = res.data; // Note: The data structure is different
//       setData(productsData);
//       console.log(productsData); // Check your console to see the new data format
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

//   // Note: These may not work immediately as the new API has a different data structure
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