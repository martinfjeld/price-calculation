import React from "react";
import "./margin-section.styles.scss";
export const MarginSection = ({
  children,
  columns,
  fifty,
  header,
  first,
  borderBottom,
  big,
}) => {
  return (
    <div
      className={`margin-section${columns ? " columns" : ""}${
        fifty ? " fifty" : ""
      }${first ? " first" : ""}${borderBottom ? " border-bottom" : ""}${
        big ? " big" : ""
      }`}
    >
      {!fifty && <h2 className="margin-section_header">{header}</h2>}
      {children}
    </div>
  );
};
