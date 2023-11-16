import React from "react";
import deleteLogo from "../images/trash.png";
import minusLogo from "../images/minus.png";
import plusLogo from "../images/plus.png";
import { useDispatch } from "react-redux";
import { minusQuantity, plusQuantity, remove } from "../redux/cart/cartSlice";

const ItemCart = (props) => {
  const dispatch = useDispatch();
  const { id, image, name, price, color, quantity } = props;

  // handle event remove item cart
  const handleRemove = () => {
    dispatch(remove(id));
  };

  // handle event plus more one quantity of product in a cart by id
  const handlePlusQuantity = () => {
    dispatch(plusQuantity(id));
  };

  // handle event minus more one quantity of product in a cart by id
  const handleMinusQuantity = () => {
    dispatch(minusQuantity(id));
  };
  return (
    <div className="wrap-item-cart">
      <div style={{ backgroundColor: color }} className="wrap-item-cart-img">
        <img className="item-cart-img" src={image} alt="cart-img" />
      </div>
      <div className="item-cart-content">
        <h4 className="item-cart-title">{name}</h4>
        <h3 className="item-cart-price">${price}</h3>
        <div className="item-cart-controller">
          <div className="item-cart-controller-quantity">
            <button
              onClick={handleMinusQuantity}
              className="controller-quantity-btn"
            >
              <img src={minusLogo} alt="minus" />
            </button>
            <p className="controller-quantity-text">{quantity}</p>
            <button
              onClick={handlePlusQuantity}
              className="controller-quantity-btn"
            >
              <img src={plusLogo} alt="add" />
            </button>
          </div>

          <button onClick={handleRemove} className="controller-btn-delete">
            <img src={deleteLogo} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
