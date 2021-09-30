import React from "react";
import "./fifty-container.styles.scss";
export const FiftyContainer = ({ children, flex }) => {
  return (
    <div className="fifty-container" style={{ flex: `${flex}%` }}>
      {children}
    </div>
  );
};
