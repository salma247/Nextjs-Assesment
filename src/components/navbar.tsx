"use client";
import {useState, useContext} from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Flex, Badge } from "antd";
import { RiFridgeFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

import Kitchen from "./Kitchen";
import Cart from "./Cart";
import CartContext from "@/context/Cart.context";

import Link from "next/link";

const Navbar = () => {
    const [kitchenOpen, setKitchenOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { items } = useContext(CartContext);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-100 p-4 flex justify-between items-center">
      {/* header then avatarGrop then cart and kitchen icon */}

      <Flex vertical={true}>
        <h1 className="text-2xl">Welcome to our company</h1>
        <p>You have started your 30 day trial</p>
      </Flex>

      <Flex align="center" gap="small">
        <Avatar.Group>
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<AntDesignOutlined />}
          />
          <Avatar style={{ backgroundColor: "#ccc" }}>+3</Avatar>
        </Avatar.Group>

        <Flex vertical={true}>
          <p>Our architects are here to help</p>
          <Link className="text-cyan-500" href="/">
            Book a free consultation
          </Link>
        </Flex>
      </Flex>

      <Flex gap={10}>
        <Badge count={items.length} color="yellow" offset={[-28, 0]}>
          <button className="cursor-pointer p-2 rounded-full bg-slate-300" type="button" onClick={() => setCartOpen(!cartOpen)}>
            <FaCartShopping size={18} />
          </button>
        </Badge>

        <Badge count={1} color="yellow" offset={[-28, 0]}>
          <button className="cursor-pointer p-2 rounded-full bg-slate-300" type="button" onClick={() => setKitchenOpen(!kitchenOpen)}>
            <RiFridgeFill size={18} />
          </button>
        </Badge>
      </Flex>
        <Kitchen open={kitchenOpen} onClose={() => setKitchenOpen(false)} />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
