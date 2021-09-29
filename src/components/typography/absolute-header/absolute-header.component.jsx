import React from "react";
import "./absolute-header.styles.scss";
export const AbsoluteHeader = ({ children }) => {
  return <h1 className="absolute-header">{children}</h1>;
};
