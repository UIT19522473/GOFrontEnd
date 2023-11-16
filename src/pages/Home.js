import React from "react";
import "../styles/home.css";
import OurProducts from "../components/OurProducts";
import YourCart from "../components/YourCart";

const Home = () => {
  return (
    <div className="wrap-home">
      <div className="wrap-content">
        <OurProducts />
        <YourCart />
      </div>
    </div>
  );
};

export default Home;
