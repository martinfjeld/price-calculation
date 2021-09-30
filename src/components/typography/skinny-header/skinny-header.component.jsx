import React from "react";
import { InfoBox } from "../../elements/info-box/info-box.component";
import "./skinny-header.styles.scss";
export const SkinnyHeader = ({ text, info, tail, containsSVG }) => {
  return (
    <div
      className={`skinny-header-container${containsSVG ? " contains-svg" : ""}`}
    >
      <h2 className="skinny-header">{text}</h2>
      {info && <InfoBox tail={tail} text={info} />}
    </div>
  );
};
