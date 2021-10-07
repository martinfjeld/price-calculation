import React from "react";
import "./absolute-header.styles.scss";

/**
 * A header with absolute positioning
 * @param {*} param0
 * @returns
 */
export const AbsoluteHeader = ({ children }) => {
  return <h1 className="absolute-header">{children}</h1>;
};
