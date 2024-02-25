import React from "react";
import { Drawer, Table, Space, InputNumber, Flex, Badge, Divider } from "antd";
import { MdDelete, MdClose } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";

import { useCart } from "../context/Cart.context";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = ({ open, onClose }: DrawerProps) => {
  const { items, changeQuantity, removeItem } = useCart();
  return (
    <Drawer
      title="Your Run Cart"
      extra={
        <Flex align="center">
          <div className="text-sm mx-1 text-slate-500 leading-4">
            Requests in <br /> run kitchen
          </div>
          <Badge
            count={items.length}
            color="#FFD900"
            style={{ color: "#000" }}
            showZero
          />
        </Flex>
      }
      closeIcon={
        <MdClose
          size={28}
          className="border border-gray-400 rounded-full p-1"
        />
      }
      onClose={onClose}
      open={open}
      styles={{
        body: {
          backgroundColor: "#f3f4f6",
          padding: "0",
        },
      }}
    >
      {items.length === 0 && (
        <div className="p-4 text-center text-slate-400 flex flex-col items-center h-full justify-center">
          <IoMdCart size={64} />
          <p className="text-lg text-slate-700 mt-2">Your run cart is empty!</p>
          <p>start add your requests here</p>
        </div>
      )}

      {items.length > 0 && (
        <>
          <Table dataSource={items} pagination={false}>
            <Table.Column
              title="Product"
              dataIndex="name"
              key="name"
              render={(text, record: CartItem) => (
                <Space size="middle">
                  <div className="bg-slate-200 rounded-md p-1">
                    <FiBox size={24} />
                  </div>
                  <Flex vertical gap="4">
                    <p>{text}</p>
                    <p>{record.price} DTUS</p>
                  </Flex>
                </Space>
              )}
            />
            <Table.Column
              title="Qyt."
              dataIndex="quantity"
              key="quantity"
              render={(text, record: CartItem) => (
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={text}
                  style={{ width: 50 }}
                  onChange={(value) => changeQuantity(record.id, value)}
                />
              )}
            />
            <Table.Column
              title="Remove"
              key="remove"
              render={(text, record: CartItem) => (
                <Space size="middle">
                  <MdDelete
                    size={24}
                    className="text-red-700 hover:text-red-500"
                    onClick={() => removeItem(record.id)}
                  />
                </Space>
              )}
            />
          </Table>

          <Flex className="mt-4 p-4" vertical gap={2}>
            <Flex gap="4" align="start" justify="space-between">
              <p>Subtotal</p>
              <p className="text-cyan-600">1.00 DTSUs</p>
            </Flex>
            <Flex gap="4" align="start" justify="space-between">
              <p>New payment</p>
              <p className="text-cyan-600">No, Inclusive in your package</p>
            </Flex>
            <Divider />
            <div className="flex flex-col gap-4">
              <Flex gap="4" align="start" justify="space-between">
                <p className="text-lg">Total Units Consumed</p>
                <p className="text-cyan-600">1.00 DTSUs</p>
              </Flex>
              <button className="bg-cyan-600 text-lg text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition-all">
                Checkout
              </button>
              <button className="text-cyan-600 border-2 border-cyan-600 text-lg px-4 py-2 rounded-full hover:border-cyan-500 hover:text-cyan-500 transition-all">
                Back to Run Information
              </button>
            </div>
          </Flex>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
