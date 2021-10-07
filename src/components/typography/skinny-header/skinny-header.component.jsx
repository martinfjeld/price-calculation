import React from "react";
import { InfoBox } from "../../elements/info-box/info-box.component";
import "./skinny-header.styles.scss";

/**
 *  A skinny header
 * @param {string} text The text to display
 * @param {string} info If you want to include the default infobox
 * @param {string} tail Position of the infobox tail
 * @returns
 */
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
