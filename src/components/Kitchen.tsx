import React from "react";
import { Drawer } from "antd";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Kitchen = ({ open, onClose }: DrawerProps) => {
  return (
    <Drawer title="Your Run kitchen" onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Kitchen;
