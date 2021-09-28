import React from "react";
import "./margin-section-fifty.styles.scss";
export const MarginSectionFifty = ({ children, header }) => {
  return (
    <div className="margin-section-fifty">
      <h2>{header}</h2>
      {children}
    </div>
  );
};
