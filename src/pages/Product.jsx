import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import nodata from "../assets/nodata.json";
import MobileFilter from "../components/MobileFilter";

const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0); //always start from top in product page
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price != null &&
      typeof item.price === "number" &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  //   // const dynamicPage = Math.ceil(filteredData.length / 8);  //need to use optional chaining
  const dynamicPage = Math.ceil((filteredData?.length || 0) / 8);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          handleBrandChange={handleBrandChange}
          handleCategoryChange={handleCategoryChange}
        />
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8 ">
              {/* Sidebar filter */}
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                category={category}
                setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />

              {/* Products section */}

              {filteredData?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10 min-h-[400px]">
                  {filteredData
                    .slice(page * 8 - 8, page * 8)
                    .map((data, index) => (
                      <ProductCard key={index} data={data} />
                    ))}
                </div>
              ) : (
                <div className="flex justify-center items-center w-full mt-10 min-h-[400px]">
                  <Lottie
                    animationData={nodata}
                    className="w-[300px] md:w-[500px]"
                  />
                </div>
              )}
            </div>

            {/* Pagination only if results are found */}
            {filteredData?.length > 0 && (
              <Pagination
                selectPageHandler={selectPageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
