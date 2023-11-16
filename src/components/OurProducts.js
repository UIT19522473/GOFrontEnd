import React, { useEffect, useState } from "react";
import "../styles/our-products.css";
import LayoutCard from "./LayoutCard";
import Product from "./Product";
import dataShoes from "../data/shoes.json";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  // fetch data into products
  useEffect(() => {
    setProducts(dataShoes.shoes);
  }, []);

  return (
    <LayoutCard title="Our Products">
      {/* render list products  */}
      {products.map((item, index) => (
        <Product
          key={index}
          id={item?.id}
          image={item?.image}
          name={item?.name}
          description={item?.description}
          price={item?.price}
          color={item?.color}
        />
      ))}
    </LayoutCard>
  );
};

export default OurProducts;
