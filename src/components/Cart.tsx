import React from "react";
import { Drawer } from "antd";
import { useCart } from "../context/Cart.context";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Cart = ({ open, onClose }: DrawerProps) => {
    const { items } = useCart();
  return (
    <Drawer title="Your cart" onClose={onClose} open={open}>
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                {item.name} x {item.quantity}
            </li>
            ))}
        </ul>
    </Drawer>
  );
};

export default Cart;
