import React, { useState } from "react";
import "./info-box.styles.scss";
export const InfoBox = ({ text, tail }) => {
  const [infoBox, setInfoBox] = useState(false);
  const handleHover = (e) => {
    setInfoBox(!infoBox);
  };
  return (
    <div className="info-ico">
      <img
        src="./info2.svg"
        alt="info-icon"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      <div
        className={`info-box ${tail}`}
        style={{ display: infoBox ? "flex" : "none" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
