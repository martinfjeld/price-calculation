import React from "react";
import "./total-price.styles.scss";
export const TotalPrice = ({ price }) => {
  return <h1 className="total-price">{price},-</h1>;
};
