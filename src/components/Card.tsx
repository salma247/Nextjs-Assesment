"use client";
import React from "react";
import { Card as AntCard } from "antd";
import { CiShare1 } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "../context/Cart.context";

const { Meta } = AntCard;
interface CardProps {
  id: number;
  title: string;
  description: string;
  color?: string;
  dtsu: number;
  image?: string;
}

const Card = ({ id, title, description, color, dtsu, image }: CardProps) => {
  const { addItem } = useCart();
  return (
    <AntCard cover={<img src={`/images/${image}`} alt={title} className="h-60" />} styles={{
        body: {
          backgroundColor: color,
          borderRadius: "10px",
        },
        }}>
    <div className="text-white">
        <h1 className="text-xl">{title}</h1>
        <p className="text-md my-2">{description}</p>

        <div className="flex justify-between">
          <p className="text-xl">DTUs: {dtsu}</p>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-full bg-black/20"
              onClick={() =>
                addItem({ id: id, name: title, quantity: 1, price: dtsu })
              }
            >
              <IoAddOutline size={20} />
            </button>
            <Link href={`/service/${title}`} className="p-2 rounded-full bg-black/20">
              <CiShare1 size={20} />
            </Link>
          </div>
        </div>
      </div>
    </AntCard>
  );
};

export default Card;
