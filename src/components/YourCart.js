import React from "react";
import "../styles/your-card.css";
import LayoutCard from "./LayoutCard";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

const YourCart = () => {
  const dataCart = useSelector((state) => state.cart.data);

  return (
    <LayoutCard title="Your cart" type="card">
      {dataCart?.map((item, index) => (
        <ItemCart
          key={index}
          id={item?.id}
          image={item?.image}
          name={item?.name}
          description={item?.description}
          price={item?.price}
          color={item?.color}
          quantity={item?.quantity}
        />
      ))}
    </LayoutCard>
  );
};

export default YourCart;
