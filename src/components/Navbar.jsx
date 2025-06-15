import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({
  location,
  getLocation,
  openLocDropDown,
  setOpenLocDropDown,
}) => {
  const { cartItem } = useCart();

  const [openNav, setOpenNav] = useState(false);

  const toggleDropdown = () => {
    setOpenLocDropDown(!openLocDropDown);
  };

  return (
    <div
      className=" text-amber-50  
 bg-gradient-to-r from-[#0A0A1A] via-[#1A1A3B] to-[#0F0F2A]    
    py-3 shadow-2xl  px-4 md:px-0 "
    >
      <div className=" max-w-6xl mx-auto flex justify-between items-center">
        {/* logo */}
        <div className=" flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className=" text-3xl font-bold flex gap-0.5 items-center">
              {" "}
              <span className="text-yellow-500 font-serif text-4xl mt-0.5">
                E
              </span>
              lect
              <span className="text-yellow-400 text-2xl -ml-2 mt-1.5">
                <span
                  className="inline-block animate-spin  "
                  style={{ animationDuration: "5s" }}
                >
                  ⚡
                </span>
              </span>
              <span className=" -ml-2">o</span>
            </h1>
          </Link>
          <div
            className=" md:flex gap-1 cursor-pointer text-gray-700 items-center hidden"
            onClick={toggleDropdown}
          >
            <MapPin className=" text-amber-300" />
            <span className="  font-semibold ">
              {location ? (
                <div className=" -space-y-1 text-gray-400">
                  <p className=" ml-0.5">{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                <span className=" text-gray-400">"Add Address"</span>
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} className=" text-gray-400" />
          </div>
          {openLocDropDown ? (
            <div className=" w-[250px] h-max shadow-2xl z-50 fixed top-16 left-60 border-2 p-5 border-amber-300 rounded-md text-gray-700">
              <h1 className=" font-semibold text-red-500  mb-4 text-xl flex justify-between">
                Change Location{" "}
                <span onClick={toggleDropdown}>
                  <CgClose className=" cursor-pointer" />
                </span>
              </h1>
              <button
                className=" text-white px-3 py-1 bg-orange-700 rounded-md cursor-pointer hover:bg-amber-500"
                onClick={getLocation}
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        {/* menu */}
        <nav className=" flex gap-7 items-center  ">
          <ul className="md:flex gap-7 items-center text-xl font-semibold hidden ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? " border-b-3 transition-all border-amber-300 "
                    : "text-black"
                } cursor-pointer `
              }
            >
              <li className=" text-white">Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? " border-b-2 transition-all border-amber-300 "
                    : "text-black"
                } cursor-pointer `
              }
            >
              <li className=" text-white">Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? " border-b-3 transition-all border-amber-300 "
                    : "text-black"
                } cursor-pointer `
              }
            >
              <li className=" text-white">About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? " border-b-3 transition-all border-amber-300 "
                    : "text-black"
                } cursor-pointer `
              }
            >
              <li className=" text-white">Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className=" h-7 w-6" />
            <span className=" bg-yellow-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cartItem.length}
            </span>
          </Link>
          <div className=" hidden md:block">
            <SignedOut>
              <SignInButton className=" bg-amber-400 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton className="" />
            </SignedIn>
          </div>
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className=" h-7 w-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className=" h-7 w-7 md:hidden"
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
