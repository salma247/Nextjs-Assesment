"use client";
import React from "react";
import { Card as AntCard } from "antd";
import { CiShare1 } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "../context/Cart.context";

interface CardProps {
  id: number;
  title: string;
  description: string;
  color?: string;
  dtsu: number;
}

const Card = ({ id, title, description, color, dtsu }: CardProps) => {
  const { addItem } = useCart();
  return (
    <AntCard>
      <div className={`bg-${color}-500 p-4`}>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="flex justify-between">
          <p>DTUs: {dtsu}</p>
          <div className="flex gap-2">
            <button
              className=" p-2 rounded-full"
              onClick={() =>
                addItem({ id: id, name: title, quantity: 1, price: dtsu })
              }
            >
              <IoAddOutline size={20} />
            </button>
            <Link href={`/service/${title}`} className="p-2 rounded-full">
              <CiShare1 size={20} />
            </Link>
          </div>
        </div>
      </div>
    </AntCard>
  );
};

export default Card;
