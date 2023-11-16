import React, { useEffect, useState } from "react";
import checkLogo from "../images/check.png";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cart/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  // get data of cart from redux
  const cartRedux = useSelector((state) => state.cart.data);
  const { id, image, name, description, price, color } = props;

  // check status of product (false: product is available, true: product is added to cart)
  const [check, setCheck] = useState(false);

  // handle event add product to cart
  const handleAddToCart = () => {
    const item = { id, image, name, price, color, quantity: 1 };
    dispatch(add(item));
  };

  // update check status of product by cartRedux
  useEffect(() => {
    const findProduct = cartRedux.find((item) => item.id === id);
    findProduct ? setCheck(true) : setCheck(false);
  }, [cartRedux, id]);

  return (
    <div className="wrap-product">
      <div style={{ backgroundColor: color }} className="wrap-product-img">
        <img className="product-img" src={image} alt="img" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="footer-product">
        <h3 className="product-price">${price}</h3>

        {check ? (
          <button className="btn-add-product-checked">
            <img className="product-checked-img" src={checkLogo} alt="check" />
          </button>
        ) : (
          <button onClick={handleAddToCart} className="btn-add-product">
            Add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
