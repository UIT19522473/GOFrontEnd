import React from "react";
import "../styles/layout-card.css";
import nikeLogo from "../images/nike.png";

const LayoutCard = (props) => {
  const { title, type } = props;
  return (
    <div className="wrap-layout-card">
      <div className="header-layout-card">
        <img className="logo-img" src={nikeLogo} alt="logo" />
        <div className="wrap-layout-card-title">
          <h2 className="layout-card-title">{title}</h2>
          {type === "card" ? (
            <h2 className="layout-card-title">100$</h2>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="content-layout-card">{props.children}</div>
    </div>
  );
};

export default LayoutCard;
