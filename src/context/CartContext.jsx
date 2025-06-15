import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  //Initialize cart from localStorage on first render
  const [cartItem, setCartItem] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItem");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (err) {
      return [];
    }
  });

  //  cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item already exists, increase the quantity
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCartItem(updatedCart);
    } else {
      // If item does not exist, add it with its quantity
      setCartItem([
        ...cartItem,
        { ...product, quantity: product.quantity || 1 },
      ]);
    }

    toast.success("Item added to cart");
  };

  const updateQuantity = (productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit += 1;
            } else if (action === "decrease") {
              newUnit -= 1;
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null)
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
