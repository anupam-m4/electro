import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [location, setLocation] = useState();
  const [openLocDropDown, setOpenLocDropDown] = useState(false);
  const [locationGranted, setLocationGranted] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const apiKey = import.meta.env.VITE_GEOAPIFY_KEY; // 💡 Moved here
        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

        try {
          const response = await axios.get(url);

          const result = response.data.features?.[0]?.properties;

          if (result) {
            const exactLocation = {
              state: result.state || "",
              country: result.country || "",
              postcode: result.postcode || "",
            };

            setLocation(exactLocation);
            setLocationGranted(true);
            setOpenLocDropDown(false);
          } else {
            console.error("Geoapify returned no valid result");
            setLocationGranted(false);
          }
        } catch (error) {
          console.error("Geoapify error:", error);
          setLocationGranted(false);
        }
      },
      (err) => {
        console.error("Location permission denied:", err);
        setLocationGranted(false);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openLocDropDown={openLocDropDown}
        setOpenLocDropDown={setOpenLocDropDown}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:category" element={<CategoryProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart
                location={location}
                getLocation={getLocation}
                locationGranted={locationGranted}
              />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
