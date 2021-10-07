import React, { useState } from "react";
import "./info-box.styles.scss";
export const InfoBox = ({ text, tail }) => {
  // A toggle-state that sets the value to true when hovered
  const [infoBox, setInfoBox] = useState(false);

  // Set the state to the oppicite, depending on whether the user has the focus ON or OFF the infobox
  const handleHover = () => {
    setInfoBox(!infoBox);
  };
  return (
    <div
      className="info-ico"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src="./info2.svg" alt="info-icon" />

      <div
        className={`info-box ${tail}`}
        style={{ display: infoBox ? "flex" : "none" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
