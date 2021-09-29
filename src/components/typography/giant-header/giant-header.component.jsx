import React from "react";
import "./giant-header.styles.scss";
export const GiantHeader = ({ text, after }) => {
  return (
    <h1 className="giant-header">
      {text}
      {after}
    </h1>
  );
};
