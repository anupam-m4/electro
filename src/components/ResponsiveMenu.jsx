// import { UserButton, useUser } from "@clerk/clerk-react";
// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { IoClose } from "react-icons/io5"; // X icon

// const ResponsiveMenu = ({ openNav, setOpenNav }) => {
//   const { user } = useUser();

//   return (
//     <>
//       {/* BACKDROP */}
//       {openNav && (
//         <div
//           className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm"
//           onClick={() => setOpenNav(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <div
//         className={`${
//           openNav ? "left-0" : "-left-[100%]"
//         } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col gap-8 bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
//       >
//         {/* ❌ Close Icon - Fixed in top-right */}
//         <button
//           onClick={() => setOpenNav(false)}
//           className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
//         >
//           <IoClose size={30} />
//         </button>

//         {/* User info */}
//         <div className="flex items-center justify-start gap-3">
//           {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
//           <div>
//             <h1>Hello, {user?.firstName}</h1>
//             <h1 className="text-sm text-slate-500">Premium User</h1>
//           </div>
//         </div>

//         {/* Nav links */}
//         <nav className="mt-12">
//           <ul className="flex flex-col gap-7 text-2xl font-semibold">
//             <Link to="/" onClick={() => setOpenNav(false)}>
//               <li>Home</li>
//             </Link>
//             <Link to="/products" onClick={() => setOpenNav(false)}>
//               <li>Products</li>
//             </Link>
//             <Link to="/about" onClick={() => setOpenNav(false)}>
//               <li>About</li>
//             </Link>
//             <Link to="/contact" onClick={() => setOpenNav(false)}>
//               <li>Contact</li>
//             </Link>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default ResponsiveMenu;

import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5"; // X icon

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <>
      {/* BACKDROP */}
      {openNav && (
        <div
          className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpenNav(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`${
          openNav ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col gap-8 bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
      >
        {/* ❌ Close Icon */}
        <button
          onClick={() => setOpenNav(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <IoClose size={30} />
        </button>

        {/* User info or Sign In */}
        <SignedIn>
          <div className="flex items-center justify-start gap-3">
            <UserButton size={50} />
            <div>
              <h1>Hello, {user?.firstName}</h1>
              <h1 className="text-sm text-slate-500">Premium User</h1>
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r to-amber-300 from-purple-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        {/* Nav links */}
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link to="/" onClick={() => setOpenNav(false)}>
              <li>Home</li>
            </Link>
            <Link to="/products" onClick={() => setOpenNav(false)}>
              <li>Products</li>
            </Link>
            <Link to="/about" onClick={() => setOpenNav(false)}>
              <li>About</li>
            </Link>
            <Link to="/contact" onClick={() => setOpenNav(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveMenu;
