
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItem, clearCart } = useCart(); // your context uses cartItem
  const navigate = useNavigate();

  const getSubtotal = () => {
    return (cartItem || []).reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getHandling = (subtotal) => {
    return Math.floor(subtotal * 0.01); // 1% handling
  };

  const getAppliedCouponFromStorage = () => {
    try {
      const v = localStorage.getItem("appliedCoupon");
      return v ? JSON.parse(v) : null;
    } catch {
      return null;
    }
  };

  const getTotalPaid = () => {
    const subtotal = getSubtotal();
    const handling = getHandling(subtotal);
    const applied = getAppliedCouponFromStorage();
    const discount = applied?.discount || 0; // rupee amount
    return subtotal + handling - discount;
  };

  const handlePlaceOrder = () => {
    if ((cartItem || []).length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // snapshot order details (so confirmation page can show them after cart is cleared)
    const subtotal = getSubtotal();
    const handling = getHandling(subtotal);
    const applied = getAppliedCouponFromStorage();
    const discount = applied?.discount || 0;

    const order = {
      id: `order_${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cartItem,
      subtotal,
      handling,
      discount,
      totalPaid: subtotal + handling - discount,
    };

    try {
      localStorage.setItem("lastOrder", JSON.stringify(order));
      // optionally remove appliedCoupon after placing order:
      localStorage.removeItem("appliedCoupon");
    } catch (err) {
      console.error("Failed to save order snapshot:", err);
    }

    // clear cart and navigate
    clearCart();
    navigate("/order-confirmation");
  };

  if ((cartItem || []).length === 0) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="20" r="1.5" fill="#888" />
          <circle cx="18" cy="20" r="1.5" fill="#888" />
        </svg>

        <h2 style={{ marginTop: "15px", color: "#555" }}>Your cart is empty!</h2>
        <button
          onClick={() => navigate("/products")}
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#1f2937",
          fontWeight: "700",
          fontSize: "1.5rem",
        }}
      >
        🛒 Checkout Summary
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {cartItem.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#f9fafb",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "65px",
                  height: "65px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "12px",
                }}
              />
              <div style={{ maxWidth: "200px" }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: "600",
                    color: "#111827",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.title}
                </p>
                <p style={{ margin: "4px 0", color: "#6b7280", fontSize: "0.85rem" }}>
                  Rs.{item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
            </div>

            <p
              style={{
                fontWeight: "600",
                color: "#374151",
                fontSize: "0.95rem",
              }}
            >
              Rs.{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "25px",
          padding: "15px 10px",
          borderTop: "2px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h3 style={{ fontWeight: "700", color: "#111827" }}>
          Total: Rs.{getTotalPaid().toFixed(2)}
        </h3>
        <button
          onClick={handlePlaceOrder}
          style={{
            padding: "10px 25px",
            background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1e40af")}
          onMouseOut={(e) =>
            (e.target.style.background = "linear-gradient(90deg, #2563eb, #1d4ed8)")
          }
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
