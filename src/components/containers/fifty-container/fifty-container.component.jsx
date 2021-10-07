import React from "react";
import "./fifty-container.styles.scss";

/**
 * A 50% container that has margin specified to it.
 *
 * @param {*} children Children of the component.
 * @param {number} flex The percentage of flex you want to grow the component into.
 * @returns
 */
export const FiftyContainer = ({ children, flex }) => {
  return (
    <div className="fifty-container" style={{ flex: `${flex}%` }}>
      {children}
    </div>
  );
};
