// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
// import { LuNotebook, LuNotebookText } from "react-icons/lu";
// import { MdDeliveryDining } from "react-icons/md";
// import { GiShoppingBag } from "react-icons/gi";
// import { useUser } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
// import Lottie from "lottie-react";
// import empty from "../assets/emptycart.json";
// import { toast } from "react-toastify";
// import { loadStripe } from "@stripe/stripe-js";

// const Cart = ({ location, getLocation, locationGranted }) => {
//   const navigate = useNavigate();
//   const { cartItem, updateQuantity, deleteItem } = useCart();
//   const totalPrice = cartItem.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const { user } = useUser();

//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [couponApplied, setCouponApplied] = useState(false);

//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [stateField, setStateField] = useState("");
//   const [postcode, setPostcode] = useState("");
//   const [country, setCountry] = useState("");
//   const [phone, setPhone] = useState("");

//   // Fill form when location is granted
//   useEffect(() => {
//     if (locationGranted && location) {
//       setFullName(user?.fullName || "");
//       setAddress(location.country || "");
//       setStateField(location.state || "");
//       setPostcode(location.postcode || "");
//       setCountry(`${location.state || ""}, ${location.country || ""}`);
//     }
//   }, [locationGranted, location, user]);

//   useEffect(() => {
//     const savedCoupon = JSON.parse(localStorage.getItem("appliedCoupon"));
//     if (savedCoupon) {
//       setCouponCode(savedCoupon.code);
//       setDiscount(savedCoupon.discount);
//       setCouponApplied(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (couponApplied) {
//       // Only clear if a coupon was actually applied
//       clearCoupon();
//       toast.info("Coupon removed due to cart changes.");
//     }
//   }, [cartItem.length]);

//   const handleApplyCoupon = () => {
//     if (couponApplied) {
//       toast.warn("Coupon already applied!");
//       return;
//     }

//     if (couponCode.toLowerCase() === "new30") {
//       const discountPercentage = Math.floor(Math.random() * 11) + 20;
//       const discountAmount = Math.floor(
//         (totalPrice * discountPercentage) / 100
//       );

//       setDiscount(discountAmount);
//       setCouponApplied(true);
//       toast.success(`Coupon applied! You got ${discountPercentage}% off 🎉`);
//       localStorage.setItem(
//         "appliedCoupon",
//         JSON.stringify({ code: couponCode, discount: discountAmount })
//       );
//     } else {
//       toast.error("Invalid coupon code");
//     }
//   };

//   const clearCoupon = () => {
//     setCouponApplied(false);
//     setDiscount(0);
//     setCouponCode("");

//     // Remove from localStorage
//     localStorage.removeItem("appliedCoupon");
//   };
//   // _____________________--
//   // const handleCheckout = async () => {
//   //   const stripe = await loadStripe(
//   //     "pk_test_51POvxESAr5iSahqBQXHSgq1x0Prym7qxBDHH3XaTld2GPsBjajs3JP0aSsYmbTci0J9OP4mz90D1V24bkZTfJhss00YkhbU3Lk"
//   //   ); // your Stripe PUBLIC key

//   //   const res = await fetch("http://localhost:5000/create-checkout-session", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       items: cartItem, // the cart array you're already using
//   //     }),
//   //   });

//   //   const data = await res.json();

//   //   const result = await stripe.redirectToCheckout({
//   //     sessionId: data.id,
//   //   });

//   //   if (result.error) {
//   //     toast.error(result.error.message);
//   //   }
//   // };

//   // _____________________--

//   return (
//     <div className="mt-0 mb-5 max-w-6xl mx-auto px-2 md:px-4">
//       {cartItem.length > 0 ? (
//         <div className="">
//           <h1 className=" font-bold text-2xl">CART : {cartItem.length}</h1>
//           <div className="">
//             <div className=" mt-10">
//               {cartItem.map((item, idx) => {
//                 return (
//                   <div
//                     className=" bg-gray-100 md:p-5 p-3 rounded-md flex items-center justify-between mt-3 w-full"
//                     key={idx}
//                   >
//                     <div className=" flex items-center gap-2 md:gap-4">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className=" w-20 h-20 rounded-md"
//                       />
//                       <div className="">
//                         <h1 className="md:w-[300px] w-[110px] line-clamp-2">
//                           {item.title}
//                         </h1>
//                         <p className="text-red-500 font-semibold md:text-lg">
//                           Rs.{item.price}
//                         </p>
//                       </div>
//                     </div>
//                     <div className=" bg-red-500 text-white flex gap-3 md:gap-4 md:p-2 p-2 rounded-md font-bold text-sm md:text-xl">
//                       <button
//                         onClick={() => {
//                           if (item.quantity > 1) {
//                             updateQuantity(item.id, "decrease");
//                           }
//                         }}
//                         className="cursor-pointer"
//                       >
//                         -
//                       </button>

//                       <span className="">{item?.quantity}</span>
//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             // cartItem,
//                             item.id,
//                             // item.idx,
//                             "increase"
//                           )
//                         }
//                         className=" cursor-pointer"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <span
//                       onClick={() => deleteItem(item.id)}
//                       className=" hover:bg-white/60 transition-all rounded-full p-3"
//                     >
//                       <FaRegTrashAlt className=" text-red-500 text-2xl cursor-pointer" />
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-20">
//               <div className=" bg-gray-100 rounded-md p-7 mt-5 space-y-2">
//                 <h1 className=" text-gray-800 font-bold text-xl">
//                   Delivery Info
//                 </h1>

//                 <div className="flex flex-col space-y-1">
//                   <label>Full Name</label>
//                   <input
//                     className="p-2 rounded-md"
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-1">
//                   <label>Address</label>
//                   <input
//                     className="p-2 rounded-md"
//                     type="text"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Enter your address"
//                   />
//                 </div>

//                 <div className="flex w-full gap-5">
//                   <div className="flex flex-col space-y-1 w-full">
//                     <label>State</label>
//                     <input
//                       className="rounded-md w-full p-2"
//                       type="text"
//                       value={stateField}
//                       onChange={(e) => setStateField(e.target.value)}
//                       placeholder="State"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-1 w-full">
//                     <label>Post Code</label>
//                     <input
//                       type="text"
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       value={postcode}
//                       onChange={(e) => {
//                         const numericValue = e.target.value.replace(/\D/g, ""); // removes non-digits
//                         setPostcode(numericValue);
//                       }}
//                       // onChange={(e) => setPostcode(e.target.value)}
//                       className="rounded-md w-full p-2"
//                       placeholder="Post code"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex w-full gap-5">
//                   <div className="flex flex-col space-y-1 w-full">
//                     <label>Country</label>
//                     <input
//                       className="rounded-md w-full p-2"
//                       type="text"
//                       value={country}
//                       onChange={(e) => setCountry(e.target.value)}
//                       placeholder="Country"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-1 w-full">
//                     <label>Phone Number</label>
//                     <input
//                       type="text"
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       value={phone}
//                       onChange={(e) => {
//                         const numericValue = e.target.value.replace(/\D/g, ""); // removes non-digits
//                         setPhone(numericValue);
//                       }}
//                       placeholder="Phone number"
//                       className="rounded-md w-full p-2"
//                     />
//                   </div>
//                 </div>

//                 <button className="bg-red-500 px-3 py-1 text-white rounded-md cursor-pointer mt-2 hover:bg-red-600 transition">
//                   Add Address
//                 </button>
//               </div>

//               <div className=" bg-white border border-gray-200 shadow-xl rounded-md mt-4 p-7 space-y-2 h-max">
//                 <h1 className=" text-gray-800 font-bold text-xl">Bill </h1>

//                 <div className=" flex justify-between items-center">
//                   <h1 className=" flex gap-1 items-center text-gray-700">
//                     <span>
//                       <LuNotebookText />
//                     </span>
//                     Items Total
//                   </h1>
//                   <p>Rs.{totalPrice}</p>
//                 </div>

//                 <div className=" flex justify-between items-center">
//                   <h1 className=" flex gap-1 items-center text-gray-700">
//                     <span>
//                       <MdDeliveryDining />
//                     </span>
//                     Delivery Charges
//                   </h1>
//                   <p className="text-red-600 flex gap-1">
//                     <span className=" text-gray-600 line-through">Rs. 100</span>{" "}
//                     FREE
//                   </p>
//                 </div>

//                 <div className=" flex justify-between items-center">
//                   <h1 className=" flex gap-1 items-center text-gray-700">
//                     <span>
//                       <GiShoppingBag />
//                     </span>
//                     Handling Charges
//                   </h1>
//                   <p className="text-red-600 flex gap-1">
//                     Rs.{Math.floor(totalPrice * 0.2)}
//                   </p>
//                 </div>

//                 {discount > 0 && (
//                   <div className=" flex justify-between items-center">
//                     <h1 className=" flex gap-1 items-center text-green-600 font-semibold">
//                       🎁 Coupon Discount
//                     </h1>
//                     <p className="text-green-600 font-semibold">
//                       - Rs.{discount}
//                     </p>
//                   </div>
//                 )}

//                 <hr className=" text-gray-200 mt-2" />
//                 <div className="flex justify-between items-center ">
//                   <h1 className=" font-semibold text-lg">Grand Total</h1>
//                   <p className=" font-semibold text-lg">
//                     Rs.{totalPrice + Math.floor(totalPrice * 0.2) - discount}
//                   </p>
//                 </div>

//                 <h1 className=" font-semibold text-gray-700 mb-3 mt-7">
//                   Apply Coupon
//                 </h1>

//                 <div className="relative flex gap-3 w-full">
//                   <input
//                     className={`p-2 rounded-md w-full pr-8 ${
//                       couponApplied ? "opacity-70 italic" : ""
//                     }`}
//                     type="text"
//                     placeholder={couponApplied ? "applied" : "Enter code"}
//                     value={couponApplied ? couponCode : couponCode}
//                     onChange={(e) => {
//                       if (!couponApplied) setCouponCode(e.target.value);
//                     }}
//                     disabled={couponApplied}
//                   />

//                   {/* Show (x) only if coupon applied */}
//                   {couponApplied && (
//                     <button
//                       onClick={clearCoupon}
//                       className="absolute right-28 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
//                       aria-label="Clear coupon"
//                       type="button"
//                     >
//                       <FaTimes className=" cursor-pointer" />
//                     </button>
//                   )}

//                   <button
//                     className={`border px-4 py-1 rounded-md cursor-pointer text-white ${
//                       couponApplied
//                         ? "bg-gray-400 cursor-not-allowed"
//                         : "bg-gray-600"
//                     }`}
//                     onClick={handleApplyCoupon}
//                     disabled={couponApplied}
//                   >
//                     {couponApplied ? "Applied" : "Apply"}
//                   </button>
//                 </div>

//                 <p
//                   className={`text-sm mt-1 ${
//                     couponApplied
//                       ? "opacity-50 italic select-none"
//                       : "opacity-100"
//                   }`}
//                 >
//                   Hint: apply
//                   <code className="font-bold ml-1">new30</code> to get up to 30%
//                   off
//                 </p>

//                 <button
//                   // onClick={handleCheckout}
//                   className="bg-red-500 px-3 py-1 mt-3 text-white w-full rounded-md cursor-pointer "
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className=" flex flex-col gap-3 justify-center items-center h-[660px]">
//           <h1 className=" font-semibold text-gray-600 animate-bounce">
//             Cart is Empty!
//           </h1>
//           <Lottie animationData={empty} className="w-[450px] " />

//           <button
//             onClick={() => navigate("/products")}
//             // onClick={handleCheckout}
//             className="bg-red-500 px-3 py-2 mt-3 text-white  rounded-md cursor-pointer"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import empty from "../assets/emptycart.json";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ location, getLocation, locationGranted }) => {
  const navigate = useNavigate();
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();

  const totalPrice = (cartItem || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Handling charge and coupon logic
  const handlingCharge = Math.floor(totalPrice * 0.01); // 1% handling charge
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  // `discount` stores the rupee value to subtract when a coupon is applied
  const [discount, setDiscount] = useState(0);
  const grandTotal = totalPrice + handlingCharge - discount; // final correct total

  // Address management (multiple addresses + selected address)
  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedAddress, setSelectedAddress] = useState(() => {
    const saved = localStorage.getItem("selectedAddress");
    return saved ? JSON.parse(saved) : null;
  });

  const [newAddress, setNewAddress] = useState({
    fullName: "",
    address: "",
    state: "",
    postcode: "",
    country: "",
    phone: "",
  });
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  // Fill form when location is granted (keeps your previous logic)
  useEffect(() => {
    if (locationGranted && location) {
      setNewAddress((prev) => ({
        ...prev,
        fullName: user?.fullName || "",
        address: location.country || "",
        state: location.state || "",
        postcode: location.postcode || "",
        country: `${location.state || ""}, ${location.country || ""}`,
      }));
    }
  }, [locationGranted, location, user]);

  // persist addresses and selectedAddress
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    if (selectedAddress) {
      localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
    } else {
      localStorage.removeItem("selectedAddress");
    }
  }, [selectedAddress]);

  // handle adding a new address
  const handleAddAddress = () => {
    const { fullName, address, state, postcode, country, phone } = newAddress;
    if (!fullName || !address || !state || !postcode || !country || !phone) {
      toast.error("Please fill all fields before saving address!");
      return;
    }
    const addr = { id: Date.now(), ...newAddress };
    setAddresses((prev) => {
      const next = [...prev, addr];
      // if this is the first address, auto-select it
      if (!selectedAddress) {
        setSelectedAddress(addr);
      }
      return next;
    });

    // reset newAddress fields but keep location auto-fill on next open if locationGranted
    setNewAddress({
      fullName: "",
      address: "",
      state: "",
      postcode: "",
      country: "",
      phone: "",
    });
    setIsAddingAddress(false);
    toast.success("Address added successfully!");
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    if (selectedAddress?.id === id) {
      setSelectedAddress(null);
    }
  };

  const handleSelectAddress = (addr) => {
    setSelectedAddress(addr);
  };

  // coupon handling
  const handleApplyCoupon = () => {
    if (couponApplied) {
      toast.warn("Coupon already applied!");
      return;
    }

    if (couponCode.toLowerCase() === "new5") {
      const discountAmount = Math.floor(totalPrice * 0.05);
      setDiscount(discountAmount);
      setCouponApplied(true);
      toast.success("Coupon applied! You got 5% off 🎉");
      // optionally persist coupon if you want - not required
      // localStorage.setItem("appliedCoupon", JSON.stringify({ code: couponCode, discount: discountAmount }));
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const clearCoupon = () => {
    setCouponApplied(false);
    setDiscount(0);
    setCouponCode("");
    toast.info("Coupon removed.");
    // localStorage.removeItem("appliedCoupon");
  };

  // Proceed to checkout -- strict validation: there must be >=1 address AND a selectedAddress
  const handleProceedToCheckout = () => {
    if (addresses.length === 0) {
      toast.error("Please add an address before proceeding to checkout!");
      return;
    }
    if (!selectedAddress) {
      toast.error("Please select an address before proceeding to checkout!");
      return;
    }
    // All good -> navigate
    navigate("/checkout");
  };

  return (
    <div className="mt-0 mb-5 max-w-6xl mx-auto px-2 md:px-4">
      {cartItem.length > 0 ? (
        <div className="">
          <h1 className=" font-bold text-2xl">CART : {cartItem.length}</h1>
          <div className="">
            <div className=" mt-10">
              {cartItem.map((item, idx) => {
                return (
                  <div
                    className=" bg-gray-100 md:p-5 p-3 rounded-md flex items-center justify-between mt-3 w-full"
                    key={idx}
                  >
                    <div className=" flex items-center gap-2 md:gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" w-20 h-20 rounded-md"
                      />
                      <div className="">
                        <h1 className="md:w-[300px] w-[110px] line-clamp-2">
                          {item.title}
                        </h1>
                        <p className="text-red-500 font-semibold md:text-lg">
                          Rs.{item.price}
                        </p>
                      </div>
                    </div>
                    <div className=" bg-red-500 text-white flex gap-3 md:gap-4 md:p-2 p-2 rounded-md font-bold text-sm md:text-xl">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.id, "decrease");
                          }
                        }}
                        className="cursor-pointer"
                      >
                        -
                      </button>

                      <span className="">{item?.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className=" cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span
                      onClick={() => deleteItem(item.id)}
                      className=" hover:bg-white/60 transition-all rounded-full p-3"
                    >
                      <FaRegTrashAlt className=" text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-5 space-y-3">
                <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

                {/* Add Address Button */}
                {!isAddingAddress && (
                  <button
                    onClick={() => setIsAddingAddress(true)}
                    className="text-red-500 font-semibold mt-2 flex items-center gap-2"
                  >
                    + Add Address
                  </button>
                )}

                {/* Address Form */}
                {isAddingAddress && (
                  <div className="space-y-3 mt-3">
                    <div className="flex flex-col space-y-1">
                      <label>Full Name</label>
                      <input
                        className="p-2 rounded-md"
                        type="text"
                        value={newAddress.fullName}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, fullName: e.target.value })
                        }
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label>Address</label>
                      <input
                        className="p-2 rounded-md"
                        type="text"
                        value={newAddress.address}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, address: e.target.value })
                        }
                        placeholder="Enter your address"
                      />
                    </div>

                    <div className="flex w-full gap-5">
                      <div className="flex flex-col space-y-1 w-full">
                        <label>State</label>
                        <input
                          className="rounded-md w-full p-2"
                          type="text"
                          value={newAddress.state}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, state: e.target.value })
                          }
                          placeholder="State"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label>Post Code</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={newAddress.postcode}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              postcode: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className="rounded-md w-full p-2"
                          placeholder="Post code"
                        />
                      </div>
                    </div>

                    <div className="flex w-full gap-5">
                      <div className="flex flex-col space-y-1 w-full">
                        <label>Country</label>
                        <input
                          className="rounded-md w-full p-2"
                          type="text"
                          value={newAddress.country}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, country: e.target.value })
                          }
                          placeholder="Country"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={newAddress.phone}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              phone: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          placeholder="Phone number"
                          className="rounded-md w-full p-2"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleAddAddress}
                      className="bg-red-500 px-3 py-1 text-white rounded-md cursor-pointer mt-2 hover:bg-red-600 transition"
                    >
                      Save Address
                    </button>
                  </div>
                )}

                {/* Saved Addresses list */}
                {addresses.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`flex justify-between items-center border rounded-md px-3 py-2 cursor-pointer ${
                          selectedAddress?.id === addr.id ? "border-blue-500 bg-blue-50" : ""
                        }`}
                      >
                        <div
                          className="flex items-center gap-2"
                          onClick={() => handleSelectAddress(addr)}
                        >
                          <input
                            type="radio"
                            checked={selectedAddress?.id === addr.id}
                            onChange={() => handleSelectAddress(addr)}
                          />
                          <div>
                            <p className="font-semibold">{addr.fullName}</p>
                            <p className="text-sm text-gray-600">
                              {addr.address}, {addr.state}, {addr.country} - {addr.postcode}
                            </p>
                            <p className="text-sm text-gray-700">Mobile: {addr.phone}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteAddress(addr.id)}
                          className="text-red-500 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className=" bg-white border border-gray-200 shadow-xl rounded-md mt-4 p-7 space-y-2 h-max">
                <h1 className=" text-gray-800 font-bold text-xl">Bill </h1>

                <div className=" flex justify-between items-center">
                  <h1 className=" flex gap-1 items-center text-gray-700">
                    <span>
                      <LuNotebookText />
                    </span>
                    Items Total
                  </h1>
                  <p>Rs.{totalPrice}</p>
                </div>

                <div className=" flex justify-between items-center">
                  <h1 className=" flex gap-1 items-center text-gray-700">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Delivery Charges
                  </h1>
                  <p className="text-red-600 flex gap-1">
                    <span className=" text-gray-600 line-through">Rs. 100</span>{" "}
                    FREE
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charges
                  </h1>
                  <p className="text-red-600 flex gap-1">Rs.{handlingCharge}</p>
                </div>

                {couponApplied && (
                  <div className="flex justify-between items-center">
                    <h1 className="flex gap-1 items-center text-green-600 font-semibold">
                      🎁 Coupon Discount
                    </h1>
                    <p className="text-green-600 font-semibold">- Rs.{discount}</p>
                  </div>
                )}

                <hr className=" text-gray-200 mt-2" />
                <div className="flex justify-between items-center ">
                  <h1 className=" font-semibold text-lg">Grand Total</h1>
                  <p className=" font-semibold text-lg">Rs.{grandTotal}</p>
                </div>

                <h1 className=" font-semibold text-gray-700 mb-3 mt-7">
                  Apply Coupon
                </h1>

                <div className="relative flex gap-3 w-full">
                  <input
                    className={`p-2 rounded-md w-full pr-8 ${
                      couponApplied ? "opacity-70 italic" : ""
                    }`}
                    type="text"
                    placeholder={couponApplied ? "applied" : "Enter code"}
                    value={couponCode}
                    onChange={(e) => {
                      if (!couponApplied) setCouponCode(e.target.value);
                    }}
                    disabled={couponApplied}
                  />

                  {couponApplied && (
                    <button
                      onClick={clearCoupon}
                      className="absolute right-28 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                      aria-label="Clear coupon"
                      type="button"
                    >
                      <FaTimes className=" cursor-pointer" />
                    </button>
                  )}

                  <button
                    className={`border px-4 py-1 rounded-md cursor-pointer text-white ${
                      couponApplied ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600"
                    }`}
                    onClick={handleApplyCoupon}
                    disabled={couponApplied}
                  >
                    {couponApplied ? "Applied" : "Apply"}
                  </button>
                </div>

                <p
                  className={`text-sm mt-1 ${
                    couponApplied ? "opacity-50 italic select-none" : "opacity-100"
                  }`}
                >
                  Hint: apply{" "}
                  <code className="font-bold ml-1 italic">new5</code> to get 5% off
                </p>

                <button
                  onClick={handleProceedToCheckout}
                  className="bg-red-500 px-3 py-1 mt-3 text-white w-full rounded-md cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-3 justify-center items-center h-[660px]">
          <h1 className=" font-semibold text-gray-600 animate-bounce">
            Cart is Empty!
          </h1>
          <Lottie animationData={empty} className="w-[450px]" />

          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 px-3 py-2 mt-3 text-white  rounded-md cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

