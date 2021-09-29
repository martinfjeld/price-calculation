import React from "react";
import "./bold-header.styles.scss";
export const BoldHeader = ({ text, large, small }) => {
  return (
    <h2
      className={`bold-header${large ? " large" : "" || small ? " small" : ""}`}
    >
      {text}
    </h2>
  );
};
