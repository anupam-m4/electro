

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { cartItem } = useCart(); // fallback
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastOrder");
      if (raw) {
        setOrder(JSON.parse(raw));
      } else {
        // fallback: build a simple order from current cart (if any)
        const subtotal = (cartItem || []).reduce(
          (t, i) => t + i.price * i.quantity,
          0
        );
        const handling = Math.floor(subtotal * 0.01);
        setOrder({
          id: `snapshot_${Date.now()}`,
          createdAt: new Date().toISOString(),
          items: cartItem || [],
          subtotal,
          handling,
          discount: 0,
          totalPaid: subtotal + handling,
        });
      }
    } catch (err) {
      console.error("Could not load lastOrder:", err);
    }
  }, [cartItem]);

  if (!order) {
    return null; // or a loader
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#28a745", marginBottom: "20px" }}>
        🎉 Thank you for your order!
      </h2>

      <p style={{ fontSize: "18px", color: "#444", marginBottom: "30px" }}>
        Your order has been successfully placed. We are processing it and will update you soon.
      </p>

      {order.items && order.items.length > 0 ? (
        <>
          <h3
            style={{
              textAlign: "left",
              marginBottom: "15px",
              borderBottom: "2px solid #ddd",
              paddingBottom: "10px",
              color: "#333",
            }}
          >
            Order Summary
          </h3>

          <div
            style={{
              maxHeight: "250px",
              overflowY: "auto",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            {order.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "6px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "16px", color: "#222" }}>
                      {item.title}
                    </p>
                    <p style={{ margin: "4px 0 0", color: "#666" }}>
                      Qty: {item.quantity} &nbsp; | &nbsp; Price: ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p style={{ fontWeight: "600", color: "#111" }}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "right", marginBottom: "8px" }}>
            <div style={{ color: "#555" }}>Subtotal: ₹{order.subtotal.toFixed(2)}</div>
            <div style={{ color: "#555" }}>Handling: ₹{order.handling.toFixed(2)}</div>
            {order.discount > 0 && (
              <div style={{ color: "#2f855a" }}>Discount: -₹{order.discount.toFixed(2)}</div>
            )}
          </div>

          <h3 style={{ textAlign: "right", fontWeight: "700", fontSize: "20px", color: "#111" }}>
            Total Paid: ₹{order.totalPaid.toFixed(2)}
          </h3>
        </>
      ) : (
        ""
      )}

      <button
        onClick={() => {
          // remove the snapshot so repeated visits show current cart instead
          localStorage.removeItem("lastOrder");
          navigate("/");
        }}
        style={{
          marginTop: "30px",
          padding: "12px 35px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,123,255,0.4)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Back to Shop
      </button>
    </div>
  );
};

export default OrderConfirmation;
