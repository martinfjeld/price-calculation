import React from "react";
import { SkinnyHeader } from "../../typography/skinny-header/skinny-header.component";
import "./small-container.styles.scss";
export const SmallContainer = ({
  children,
  header,
  row,
  clean,
  info,
  hasFifty,
  infoTail,
  containsSVG,
}) => {
  return (
    <div
      className={`small-container${hasFifty ? " contains-fifty" : ""}${
        row ? " row" : ""
      }${clean ? " clean" : ""}`}
    >
      {!hasFifty && (
        <SkinnyHeader
          tail={infoTail}
          info={info}
          text={header}
          containsSVG={containsSVG}
        />
      )}
      {children}
    </div>
  );
};
