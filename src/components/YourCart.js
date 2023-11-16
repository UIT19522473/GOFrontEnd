import React from "react";
import "../styles/your-card.css";
import LayoutCard from "./LayoutCard";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

const YourCart = () => {
  //get data cart from redux
  const dataCart = useSelector((state) => state.cart.data);

  // get total money in your cart: total = price*quantity
  const totalCart = dataCart
    .reduce((total, currentValue) => {
      return total + currentValue.quantity * currentValue.price;
    }, 0)
    .toFixed(2);

  return (
    <LayoutCard title="Your cart" type="card" total={totalCart}>
      {/* if cart is empty -> render a text with content: Your cart is empty else render list cart */}
      {dataCart.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <span>Your cart is empty</span>
        </>
      )}
    </LayoutCard>
  );
};

export default YourCart;
