import React from "react";
import "./giant-header.styles.scss";

/**
 * A giant header for big bald text
 * @param {*} param0
 * @returns
 */
export const GiantHeader = ({ text, after }) => {
  return (
    <h1 className="giant-header">
      {text}
      {after}
    </h1>
  );
};
