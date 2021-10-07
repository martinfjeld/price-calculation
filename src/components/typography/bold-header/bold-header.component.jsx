import React from "react";
import "./bold-header.styles.scss";

/**
 * A bold header with two sizes
 * @param {*} param0
 * @returns
 */
export const BoldHeader = ({ text, large, small }) => {
  return (
    <h2
      className={`bold-header${large ? " large" : "" || small ? " small" : ""}`}
    >
      {text}
    </h2>
  );
};
