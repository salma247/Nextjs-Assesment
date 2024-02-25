import React from "react";
import { Drawer, Table, Space, InputNumber, Flex } from "antd";
import { MdDelete } from "react-icons/md";
import { FiBox } from "react-icons/fi";

import { useCart } from "../context/Cart.context";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Cart = ({ open, onClose }: DrawerProps) => {
  const { items, changeQuantity, removeItem } = useCart();
  return (
    <Drawer title="Your Run Cart" onClose={onClose} open={open} styles={{
        body: {
          backgroundColor: "#f3f4f6",
          padding: "0",
        },
        }}>
      <Table dataSource={items} pagination={false}>
        <Table.Column
          title="Product"
          dataIndex="name"
          key="name"
          render={(text, record) => (
            <Space size="middle">
              <div className="bg-slate-200 rounded-md p-1">
                <FiBox size={24} />
              </div>
              <Flex vertical="false" gap="4">
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
          render={(text, record) => (
            <InputNumber
              min={1}
              max={10}
              defaultValue={text}
              onChange={(value) => changeQuantity(record.id, value)}
            />
          )}
        />
        <Table.Column
          title="Remove"
          key="remove"
          render={(text, record) => (
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
    </Drawer>
  );
};

export default Cart;
