"use client";

import React, { createContext, useContext, useState } from "react";

type Cart = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};
interface CartContextProps {
  items: Cart[];
  addItem: (item: Cart) => void;
  removeItem: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  changeQuantity: () => {},
  clearCart: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Cart[]>([]);

  const addItem = (item: Cart) => {
    const newItems = items.map((i) => i.id);
    if (newItems.includes(item.id)) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        }
        return i;
      });
      setItems(newItems);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const changeQuantity = (id: number, quantity: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setItems(newItems);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, changeQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
