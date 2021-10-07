import React from "react";
import "./large-container.styles.scss";

/**
 * A 100% width component that has margin specified to it.
 *
 * @param {*} children Children of the component.
 * @returns children inside of a 100% width component
 */
export const LargeContainer = ({ children }) => {
  return <div className="large-container">{children}</div>;
};
